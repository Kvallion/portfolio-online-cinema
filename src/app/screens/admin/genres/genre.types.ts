import { Genre } from "@shared/types/movie.types"

export type EditGenreData = Omit<Genre, "_id">
