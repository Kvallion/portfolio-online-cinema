import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { AdminTableRow } from "@components/admin/AdminTable/AdminTable.type"
import { useDebounce } from "@hooks/useDebounce"
import { ActorService } from "@services/actor.service"
import convertMongoDbDate from "@utils/date/convertMongoDbDate"
import { toastError } from "@utils/toastError"
import { getAdminUrl } from "@config/helpers/paths/api"

export default function useActors() {
	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		["admin panel actor list", debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					({ _id, name, slug }): AdminTableRow => ({
						_id,
						cells: [name, slug],
						editUrl: getAdminUrl(`/actors/edit/${_id}`),
					})
				),
			onError(error) {
				toastError(error, "Actor list")
			},
		}
	)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		"delete actor",
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError: (err) => toastError(err, "Delete an actor"),
			onSuccess: () => {
				toastr.success("Delete an actor", "Deleted successfully")
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({ handleSearch, ...queryData, searchTerm, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	)
}
