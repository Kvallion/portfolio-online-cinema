import { FavoriteMovies } from "../FavoriteMovies"
import PopularMovies from "../PopularMovies"
import s from "./MoviesContainer.module.scss"

interface MoviesContainerProps {}

const MoviesContainer: React.FC<MoviesContainerProps> = () => {
	return (
		<section>
			<PopularMovies />
			<FavoriteMovies />
		</section>
	)
}

export { MoviesContainer }
