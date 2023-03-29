import { GetStaticProps, InferGetStaticPropsType } from "next"

import { HomeScreen } from "@screens/Home"

import { IGalleryItem } from "@components/Gallery/Gallery.types"
import Meta from "@components/meta/Meta"

import { ISlide } from "@ui/Slider/Slider.types"

import {
	ACTOR_GALLERY_FETCH_ERR,
	GALLERY_MOVIE_FETCH_ERR,
	SLIDER_FETCH_ERR,
} from "@shared/messages/errorMsgs"

import { ActorService } from "@services/actor.service"
import { MovieService } from "@services/movie.service"

import { toastError } from "@utils/toastError"
import actor2GalleryItem from "@utils/transformData/actor2GalleryItem"
import movie2GalleryItem from "@utils/transformData/movie2GalleryItem"
import movie2Slide from "@utils/transformData/movie2Slide"

export type HomePageProps = {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	const slides: ISlide[] = await MovieService.getMostPopularMovies()
		.then((movies) => movies.map(movie2Slide))
		.catch((err) => {
			toastError(err, SLIDER_FETCH_ERR)
			return []
		})

	const actors: IGalleryItem[] = await ActorService.getPopular(7)
		.then((actors) => actors.map(actor2GalleryItem))
		.catch((err) => {
			toastError(err, ACTOR_GALLERY_FETCH_ERR)
			return []
		})

	const trendingMovies: IGalleryItem[] =
		await MovieService.getMostPopularMovies(7)
			.then((movies) => movies.map(movie2GalleryItem))
			.catch((err) => {
				toastError(err, GALLERY_MOVIE_FETCH_ERR)
				return []
			})

	return {
		props: {
			slides,
			actors,
			trendingMovies,
		},
	}
}

export default function HomePage({
	slides,
	actors,
	trendingMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies and TV shows online or stream right to your browser"
		>
			<HomeScreen
				slides={slides}
				actors={actors}
				trendingMovies={trendingMovies}
			/>
		</Meta>
	)
}
