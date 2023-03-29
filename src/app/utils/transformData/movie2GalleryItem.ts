import { IGalleryItem } from "@components/Gallery/Gallery.types"

import { Movie } from "@shared/types/movie.types"

import { getMovieUrl } from "@config/helpers/paths/singleEntity"

const movie2GalleryItem = ({
	title,
	poster,
	bigPoster,
	slug,
}: Movie): IGalleryItem => ({
	name: title,
	verticalImg: poster,
	horizontalImg: bigPoster,
	link: getMovieUrl(slug),
})

export default movie2GalleryItem
