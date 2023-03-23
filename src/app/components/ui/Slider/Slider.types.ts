import { Movie } from "@shared/types/movie.types"

export type ISlide = Pick<Movie, "_id" | "bigPoster" | "title"> & {
	subtitle?: string
	link: string
}
