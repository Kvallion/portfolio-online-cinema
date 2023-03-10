import { useMemo, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"
import { AdminTableRow } from "@components/admin/AdminTable/AdminTable.type"
import { useDebounce } from "@hooks/useDebounce"
import { UserService } from "@services/user.service"
import convertMongoDbDate from "@utils/date/convertMongoDbDate"
import { toastError } from "@utils/toastError"
import { getAdminUrl } from "@config/helpers/paths/api"

export default function useUsers() {
	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryData = useQuery(
		["admin panel user list", debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					({ _id, email, createdAt }): AdminTableRow => ({
						_id,
						cells: [email, convertMongoDbDate(createdAt)],
						editUrl: getAdminUrl(`/users/edit/${_id}`),
					})
				),
			onError(error) {
				toastError(error, "User list")
			},
		}
	)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const { mutateAsync: deleteAsync } = useMutation(
		"delete user",
		(userId: string) => UserService.deleteUser(userId),
		{
			onError: (err) => toastError(err, "Delete a user"),
			onSuccess: () => {
				toastr.success("Delete a user", "Deleted successfully")
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({ handleSearch, ...queryData, searchTerm, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	)
}
