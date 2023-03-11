import { AdminTable } from "@components/admin/AdminTable"
import { AdminHeader } from "@components/admin/AdminTable/AdminHeader"
import Heading from "@ui/heading/Heading"
import useActors from "./useActors"

const ActorListScreen: React.FC = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useActors()

	return (
		<main>
			<Heading text="Actors" className="mb-4" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Full name", "Slug"]}
				rows={data || []}
			/>
		</main>
	)
}

export default ActorListScreen
