import { AdminTable } from "@components/admin/AdminTable"
import { AdminHeader } from "@components/admin/AdminTable/AdminHeader"
import Heading from "@ui/heading/Heading"
import useUsers from "./useUsers"

const UserListScreen: React.FC = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useUsers()

	return (
		<div>
			<Heading text="Users" className="mb-4" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Email", "Registration date"]}
				rows={data || []}
			/>
		</div>
	)
}

export default UserListScreen
