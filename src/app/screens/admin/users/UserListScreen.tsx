import { AdminTable } from "@components/admin/AdminTable"
import { AdminHeader } from "@components/admin/AdminTable/AdminHeader"
import Heading from "@ui/heading/Heading"
import useUsers from "./useUsers"

interface UserListScreenProps {}

const UserListScreen: React.FC<UserListScreenProps> = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useUsers()

	return (
		<div>
			<Heading text="Users" />

			<AdminHeader
				onClick={() => {}}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Email", "Registration date"]}
				tableItems={data || []}
			/>
		</div>
	)
}

export default UserListScreen
