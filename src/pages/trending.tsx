import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import { CatalogScreen } from "@screens/CatalogScreen"

import Meta from "@components/meta/Meta"

import { FRESH_MOVIES_FETCH_ERR } from "@shared/messages/errorMsgs"
import { Movie } from "@shared/types/movie.types"

import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"

type TrendingPageProps = { movies?: Movie[] }

export const getStaticProps: GetStaticProps<TrendingPageProps> = async () => {
	const movies: Movie[] = await MovieService.getMostPopularMovies().catch(
		(err) => {
			toastError(err, FRESH_MOVIES_FETCH_ERR)
			return []
		}
	)
	return {
		props: {
			movies,
		},
	}
}

const description =
	"Trending movies and series in excellent quality: legal, safe, without ads."

const TrendingPage: NextPage<TrendingPageProps> = ({ movies }) => {
	return (
		<Meta title="Trending now" description={description}>
			<CatalogScreen
				title="Trending now"
				description={description}
				movies={movies || []}
			/>
		</Meta>
	)
}

export default TrendingPage
