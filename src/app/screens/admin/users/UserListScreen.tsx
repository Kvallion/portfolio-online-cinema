import { AdminHeader } from "@components/admin/AdminHeader"
import { AdminTable } from "@components/admin/AdminTable"
import Heading from "@ui/heading/Heading"
import useUsers from "./useUsers"

const UserListScreen: React.FC = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useUsers()

	return (
		<main>
			<Heading text="Users" className="mb-4" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Email", "Registration date"]}
				rows={data || []}
			/>
		</main>
	)
}

export default UserListScreen
