import { useQuery } from "react-query"

import { SelectOption } from "@ui/formElements/Select"

import { ActorService } from "@services/actor.service"

import { toastError } from "@utils/toastError"

export default function useActorsForSelect() {
	const queryData = useQuery(
		"All actors in admin",
		() => ActorService.getAll(),
		{
			select: (data) =>
				data.map(
					({ name, _id }): SelectOption => ({
						label: name,
						value: _id,
					})
				),
			onError: (err) => toastError(err, "Loading all actors"),
		}
	)

	const data = {
		actors: queryData.data,
		isActorsLoading: queryData.isLoading,
	}
	return data
}
