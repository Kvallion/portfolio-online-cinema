import { Movie } from "@shared/types/movie.types"
import { getMoviesUrl } from "@config/helpers/paths/api"
import { axiosPrivate, axiosPublic } from "./api/interceptors"

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Movie[]>(getMoviesUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMostPopularMovies() {
		const { data } = await axiosPublic.get<Movie[]>(
			getMoviesUrl("/most-popular")
		)
		return data
	},
	async deleteMovie(id: string) {
		return axiosPrivate.delete<string>(getMoviesUrl(`/${id}`))
	},
}
