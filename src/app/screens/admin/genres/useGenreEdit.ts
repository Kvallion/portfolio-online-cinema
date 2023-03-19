import { useRouter } from "next/router"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { Genre } from "@shared/types/movie.types"
import { GenreService } from "@services/genre.service"
import getKeys from "@utils/object/getKeys"
import { toastError } from "@utils/toastError"
import { getAdminUrl } from "@config/helpers/paths/api"
import { EditGenreData } from "./genre.types"

export default function useGenreEdit(setValue: UseFormSetValue<EditGenreData>) {
	const { push, query } = useRouter()
	const genreId = String(query.id)

	const { isLoading, refetch } = useQuery(
		["genre by id", genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError: (err) => toastError(err, "Get genre"),
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		"update genre",
		(data: EditGenreData) => GenreService.update(genreId, data),
		{
			onError: (err) => toastError(err, "Get genre"),
			onSuccess() {
				toastr.success("Update genre", "Updated successfully")
				push(getAdminUrl("genres"))
			},
		}
	)

	const onSubmit: SubmitHandler<EditGenreData> = async (data) => {
		await mutateAsync(data)
		// refetch()
	}

	return { onSubmit, isLoading }
}
