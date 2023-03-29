import { GetStaticPaths, GetStaticProps, NextPage } from "next"

import { CatalogScreen } from "@screens/CatalogScreen"

import Meta from "@components/meta/Meta"

import { GENRE_FOR_GENRE_PAGE_FETCH_ERR } from "@shared/messages/errorMsgs"
import { Actor, Movie } from "@shared/types/movie.types"

import { ActorService } from "@services/actor.service"
import { GenreService } from "@services/genre.service"
import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"

import Error404 from "../404"

type ActorPageProps = { movies: Movie[]; actor: Actor | null }

const ActorPage: NextPage<ActorPageProps> = ({ actor, movies }) => {
	if (!actor) {
		return <Error404 />
	}
	const title = `${actor.name}`

	return (
		<Meta title={title} description={title + "movies"}>
			<CatalogScreen title={title} movies={movies || []} />
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const actors = await ActorService.getAll()
		const paths = actors.map(({ slug }) => ({ params: { slug } }))

		return { paths, fallback: "blocking" }
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps<ActorPageProps> = async ({
	params,
}) => {
	const slug = String(params?.slug)
	const actor: ActorPageProps["actor"] = await ActorService.getBySlug(slug)
		.then(({ data }) => data)
		.catch((err) => null)
	const movies: ActorPageProps["movies"] = !actor
		? []
		: await MovieService.getByActor(actor._id)
				.then(({ data }) => data)
				.catch((err) => [])

	return {
		props: {
			movies,
			actor,
		},
	}
}

export default ActorPage
