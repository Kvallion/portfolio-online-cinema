import { Movie } from "@shared/types/movie.types"
import { getMoviesUrl } from "@config/helpers/paths/api"
import { axiosPublic } from "./api/interceptors"

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Movie[]>(getMoviesUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
