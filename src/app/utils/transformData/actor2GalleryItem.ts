import { GalleryItem } from "@components/Gallery/Gallery.types"

import { Actor } from "@shared/types/movie.types"

import { getActorUrl } from "@config/helpers/paths/singleEntity"

const actor2GalleryItem = ({
	name,
	photo,
	slug,
	countMovies,
}: Actor): GalleryItem => ({
	name,
	posterPath: photo,
	link: getActorUrl(slug),
	content: {
		title: name,
		subtitle: `${countMovies} movies`,
	},
})

export default actor2GalleryItem
