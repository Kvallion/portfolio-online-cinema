import GenreListScreen from "@screens/admin/genres/GenreListScreen"
import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const GenreListPage: NextPageAuth = () => {
	return (
		<Meta title="Admin panel | movies">
			<GenreListScreen />
		</Meta>
	)
}

GenreListPage.onlyAdmin = true

export default GenreListPage
