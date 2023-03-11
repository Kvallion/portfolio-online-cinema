import { AdminTable } from "@components/admin/AdminTable"
import { AdminHeader } from "@components/admin/AdminTable/AdminHeader"
import Heading from "@ui/heading/Heading"
import useMovies from "./useMovies"

const MovieListScreen: React.FC = () => {
	const { data, handleSearch, isLoading, searchTerm, deleteAsync } =
		useMovies()

	return (
		<main>
			<Heading text="Movies" className="mb-4" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={["Title", "Genres", "Rating"]}
				rows={data || []}
			/>
		</main>
	)
}

export default MovieListScreen
