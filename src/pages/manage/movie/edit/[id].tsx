import MovieEditScreen from "@screens/admin/movie/MovieEditScreen"

import Meta from "@components/meta/Meta"

import { NextPageAuth } from "@shared/types/roles.types"

const MovieEditPage: NextPageAuth = () => {
	return (
		<Meta title="Edit movie | Admin panel">
			<MovieEditScreen />
		</Meta>
	)
}

MovieEditPage.onlyAdmin = true

export default MovieEditPage
