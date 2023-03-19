import { EditGenreData } from "@screens/admin/genres/genre.types"

import { Genre } from "@shared/types/movie.types"

import { getGenresUrl } from "@config/helpers/paths/api"

import { axiosPrivate, axiosPublic } from "./api/interceptors"

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Genre[]>(getGenresUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getById(id: string) {
		return axiosPrivate.get<EditGenreData>(getGenresUrl(`/${id}`))
	},
	create() {
		return axiosPrivate.post<string>(getGenresUrl("/"))
	},
	async update(id: string, data: EditGenreData) {
		return axiosPrivate.put<string>(getGenresUrl(`/${id}`), data)
	},

	async delete(id: string) {
		return axiosPrivate.delete<string>(getGenresUrl(`/${id}`))
	},
}
