import { addSlash } from "@config/helpers/addSlash"

export const getGenreUrl = (slug: string) => `/genre${addSlash(slug)}`
export const getMovieUrl = (slug: string) => `/movie${addSlash(slug)}`
export const getActorUrl = (slug: string) => `/actor${addSlash(slug)}`
