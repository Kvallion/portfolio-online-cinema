import { useRouter } from "next/router"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

import { MovieService } from "@services/movie.service"

import getKeys from "@utils/object/getKeys"
import { toastError } from "@utils/toastError"

import { getAdminUrl } from "@config/helpers/paths/api"

import { EditMovieData } from "../movie.types"

export default function useMovieEdit(setValue: UseFormSetValue<EditMovieData>) {
	const { push, query } = useRouter()
	const movieId = String(query.id)

	const { isLoading, refetch } = useQuery(
		["movie by id", movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError: (err) => toastError(err, "Get movie"),
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		"update movie",
		(data: EditMovieData) => MovieService.update(movieId, data),
		{
			onError: (err) => toastError(err, "Get movie"),
			onSuccess() {
				toastr.success("Update movie", "Updated successfully")
				push(getAdminUrl("movies"))
			},
		}
	)

	const onSubmit: SubmitHandler<EditMovieData> = async (data) => {
		await mutateAsync(data)
		// refetch()
	}

	return { onSubmit, isLoading }
}
