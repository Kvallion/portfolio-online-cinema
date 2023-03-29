import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import { CatalogScreen } from "@screens/CatalogScreen"

import Meta from "@components/meta/Meta"

import { GENRE_FOR_GENRE_PAGE_FETCH_ERR } from "@shared/messages/errorMsgs"
import { Genre, Movie } from "@shared/types/movie.types"

import { GenreService } from "@services/genre.service"
import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"

import Error404 from "../404"

type GenrePageProps = { movies: Movie[]; genre: Genre | null }

const GenrePage: NextPage<GenrePageProps> = ({ genre, movies }) => {
	if (!genre) {
		return <Error404 />
	}
	const title = `${genre.name} movies`

	return (
		<Meta title={title} description={genre.description}>
			<CatalogScreen
				title={title}
				description={genre.description}
				movies={movies || []}
			/>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()
		const paths = genres.map(({ slug }) => ({ params: { slug } }))

		return { paths, fallback: "blocking" }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps<GenrePageProps> = async ({
	params,
}) => {
	const slug = String(params?.slug)
	const genre: GenrePageProps["genre"] = await GenreService.getBySlug(slug)
		.then(({ data }) => data)
		.catch((err) => {
			toastError(err, GENRE_FOR_GENRE_PAGE_FETCH_ERR)
			return null
		})
	const movies: GenrePageProps["movies"] = !genre
		? []
		: await MovieService.getByGenres([genre._id])
				.then(({ data }) => data)
				.catch((err) => {
					return []
				})

	return {
		props: {
			movies,
			genre,
		},
	}
}

export default GenrePage
