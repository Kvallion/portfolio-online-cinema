import { Actor } from "@shared/types/movie.types"

export type EditActorData = Omit<Actor, "_id" | "countMovies">
