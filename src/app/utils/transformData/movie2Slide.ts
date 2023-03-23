import { ISlide } from "@ui/Slider/Slider.types"

import { Movie } from "@shared/types/movie.types"

import { getMoviesUrl } from "@config/helpers/paths/api"

const movie2Slide = ({
	_id,
	slug,
	bigPoster,
	genres,
	title,
}: Movie): ISlide => ({
	_id,
	bigPoster,
	title,
	subtitle: genres.map(({ name }) => name).join(", "),
	link: getMoviesUrl(slug),
})

export default movie2Slide
