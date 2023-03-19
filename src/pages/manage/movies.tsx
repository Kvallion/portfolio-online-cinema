import MovieListScreen from "@screens/admin/movie/MovieListScreen"
import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const MovieListPage: NextPageAuth = () => {
	return (
		<Meta title="Movies | Admin panel">
			<MovieListScreen />
		</Meta>
	)
}

MovieListPage.onlyAdmin = true

export default MovieListPage
