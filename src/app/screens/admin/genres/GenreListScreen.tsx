import { AdminTable } from "@components/admin/AdminTable"
import { AdminHeader } from "@components/admin/AdminTable/AdminHeader"
import Heading from "@ui/heading/Heading"
import useGenres from "./useGenres"

const GenreListScreen: React.FC = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useGenres()

	return (
		<main>
			<Heading text="Genres" className="mb-4" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Name", "Slug"]}
				rows={data || []}
			/>
		</main>
	)
}

export default GenreListScreen
