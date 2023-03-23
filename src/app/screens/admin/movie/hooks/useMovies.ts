import { useRouter } from "next/router"
import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

import { AdminTableRow } from "@components/admin/AdminTable/AdminTable.type"

import { useDebounce } from "@hooks/useDebounce"

import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"

import { getAdminUrl } from "@config/helpers/paths/api"

export default function useMovies() {
	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		["movie list", debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					({ _id, title, genres, rating }): AdminTableRow => ({
						_id,
						cells: [
							title,
							genres.map((g) => g.name).join(", "),
							String(rating),
						],
						editUrl: getAdminUrl(`/movie/edit/${_id}`),
					})
				),
			onError(error) {
				toastError(error, "Movie list")
			},
		}
	)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		"delete movie",
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError: (err) => toastError(err, "Delete a movie"),
			onSuccess: () => {
				toastr.success("Delete a movie", "Deleted successfully")
				queryData.refetch()
			},
		}
	)

	const { push } = useRouter()
	const { mutateAsync: createAsync } = useMutation(
		"create movie",
		() => MovieService.create(),
		{
			onError: (err) => toastError(err, "Create a movie"),
			onSuccess: ({ data: id }) => {
				toastr.success("Create a movie", "Created successfully")
				push(getAdminUrl(`/movie/edit/${id}`))
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
