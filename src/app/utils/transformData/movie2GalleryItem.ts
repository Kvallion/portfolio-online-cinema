import { GalleryItem } from "@components/Gallery/Gallery.types"

import { Movie } from "@shared/types/movie.types"

import { getMovieUrl } from "@config/helpers/paths/singleEntity"

const movie2GalleryItem = ({ title, poster, slug }: Movie): GalleryItem => ({
	name: title,
	posterPath: poster,
	link: getMovieUrl(slug),
})

export default movie2GalleryItem
