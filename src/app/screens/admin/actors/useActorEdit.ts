import { useRouter } from "next/router"
import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"

import { ActorService } from "@services/actor.service"

import getKeys from "@utils/object/getKeys"
import { toastError } from "@utils/toastError"

import { getAdminUrl } from "@config/helpers/paths/api"

import { EditActorData } from "./actor.types"

export default function useActorEdit(setValue: UseFormSetValue<EditActorData>) {
	const { push, query } = useRouter()
	const actorId = String(query.id)

	const { isLoading, refetch } = useQuery(
		["actor by id", actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess({ data }) {
				getKeys(data).forEach((key) => setValue(key, data[key]))
			},
			onError: (err) => toastError(err, "Get actor"),
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		"update actor",
		(data: EditActorData) => ActorService.update(actorId, data),
		{
			onError: (err) => toastError(err, "Get actor"),
			onSuccess() {
				toastr.success("Update actor", "Updated successfully")
				push(getAdminUrl("actors"))
			},
		}
	)

	const onSubmit: SubmitHandler<EditActorData> = async (data) => {
		await mutateAsync(data)
		// refetch()
	}

	return { onSubmit, isLoading }
}
