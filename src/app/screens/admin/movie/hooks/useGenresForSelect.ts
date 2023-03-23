import { useQuery } from "react-query"

import { SelectOption } from "@ui/formElements/Select"

import { GenreService } from "@services/genre.service"

import { toastError } from "@utils/toastError"

export default function useGenresForSelect() {
	const queryData = useQuery(
		"All genres in admin",
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					({ name, _id }): SelectOption => ({
						label: name,
						value: _id,
					})
				),
			onError: (err) => toastError(err, "Loading all genres"),
		}
	)
	const data = {
		genres: queryData.data,
		isGenresLoading: queryData.isLoading,
	}
	return data
}
