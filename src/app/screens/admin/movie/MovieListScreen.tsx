import { AdminHeader } from "@components/admin/AdminHeader"
import { AdminTable } from "@components/admin/AdminTable"

import Heading from "@ui/heading/Heading"

import useMovies from "./useMovies"

const MovieListScreen: React.FC = () => {
	const {
		data,
		handleSearch,
		isLoading,
		searchTerm,
		deleteAsync,
		createAsync,
	} = useMovies()

	return (
		<main>
			<Heading text="Movies" className="mb-4" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
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
