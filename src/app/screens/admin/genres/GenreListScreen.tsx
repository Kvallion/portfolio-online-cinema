import { AdminHeader } from "@components/admin/AdminHeader"
import { AdminTable } from "@components/admin/AdminTable"

import Heading from "@ui/heading/Heading"

import useGenres from "./useGenres"

const GenreListScreen: React.FC = () => {
	const {
		data,
		handleSearch,
		isLoading,
		searchTerm,
		deleteAsync,
		createAsync,
	} = useGenres()

	return (
		<main>
			<Heading text="Genres" className="mb-4" />

			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
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
