import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"

import { CatalogScreen } from "@screens/CatalogScreen"

import Meta from "@components/meta/Meta"

import { FRESH_MOVIES_FETCH_ERR } from "@shared/messages/errorMsgs"
import { Movie } from "@shared/types/movie.types"

import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"

type FreshMoviesPageProps = { movies?: Movie[] }

export const getStaticProps: GetStaticProps<
	FreshMoviesPageProps
> = async () => {
	const movies: Movie[] = await MovieService.getAll()
		.then(({ data }) => data)
		.catch((err) => {
			toastError(err, FRESH_MOVIES_FETCH_ERR)
			return []
		})
	return {
		props: {
			movies,
		},
	}
}

const description =
	"New movies and series in excellent quality: legal, safe, without ads."

const FreshMoviesPage: NextPage<FreshMoviesPageProps> = ({ movies }) => {
	return (
		<Meta title="Fresh movies" description={description}>
			<CatalogScreen
				title="Fresh movies"
				description={description}
				movies={movies || []}
			/>
		</Meta>
	)
}

export default FreshMoviesPage
