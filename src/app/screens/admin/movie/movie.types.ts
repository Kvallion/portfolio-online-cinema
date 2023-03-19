import { Movie } from "@shared/types/movie.types"

export type EditMovieData = Omit<Movie, "_id" | "countOpened">
