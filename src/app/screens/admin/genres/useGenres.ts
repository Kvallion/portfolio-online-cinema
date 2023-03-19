import { useRouter } from "next/router"
import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

import { AdminTableRow } from "@components/admin/AdminTable/AdminTable.type"

import { useDebounce } from "@hooks/useDebounce"

import { GenreService } from "@services/genre.service"

import { toastError } from "@utils/toastError"

import { getAdminUrl, getGenresUrl } from "@config/helpers/paths/api"

export default function useGenres() {
	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		["admin panel genre list", debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					({ _id, name, slug }): AdminTableRow => ({
						_id,
						cells: [name, slug],
						editUrl: getAdminUrl(`/genre/edit/${_id}`),
					})
				),
			onError(error) {
				toastError(error, "Genre list")
			},
		}
	)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		"delete genre",
		(genreId: string) => GenreService.delete(genreId),
		{
			onError: (err) => toastError(err, "Delete a genre"),
			onSuccess: () => {
				toastr.success("Delete a genre", "Deleted successfully")
				queryData.refetch()
			},
		}
	)
	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		"create genre",
		() => GenreService.create(),
		{
			onError: (err) => toastError(err, "Create a genre"),
			onSuccess: ({ data: id }) => {
				toastr.success("Create a genre", "Created successfully")
				push(getAdminUrl(`/genre/edit/${id}`))
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
