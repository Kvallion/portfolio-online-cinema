import { EditMovieData } from "@screens/admin/movie/movie.types"

import { Genre, Movie } from "@shared/types/movie.types"

import { getMoviesUrl } from "@config/helpers/paths/api"

import { axiosPrivate, axiosPublic } from "./api/interceptors"

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Movie[]>(getMoviesUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getById(id: string) {
		return axiosPrivate.get<EditMovieData>(getMoviesUrl(`/${id}`))
	},
	async getMostPopularMovies(limit?: number) {
		const { data } = await axiosPublic.get<Movie[]>(
			getMoviesUrl("/most-popular")
		)
		return limit ? data.slice(0, limit) : data
	},
	async getByGenres(genreIds: string[]) {
		return axiosPublic.post<Movie[]>(getMoviesUrl("/by-genres"), {
			genreIds,
		})
	},
	async getByActor(actorId: string) {
		return axiosPublic.get<Movie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async create() {
		return axiosPrivate.post<string>(getMoviesUrl())
	},
	async update(id: string, data: EditMovieData) {
		return axiosPrivate.put<string>(getMoviesUrl(`/${id}`), data)
	},

	async deleteMovie(id: string) {
		return axiosPrivate.delete<string>(getMoviesUrl(`/${id}`))
	},
}
