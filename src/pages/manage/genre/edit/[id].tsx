import GenreEditScreen from "@screens/admin/genres/GenreEditScreen"
import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const GenreEditPage: NextPageAuth = () => {
	return (
		<Meta title="Edit genre | Admin panel">
			<GenreEditScreen />
		</Meta>
	)
}

GenreEditPage.onlyAdmin = true

export default GenreEditPage
