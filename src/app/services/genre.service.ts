import { Genre } from "@shared/types/movie.types"

import { getGenresUrl } from "@utils/paths/api"

import { axiosPublic } from "./api/interceptors"

export const genreService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Genre[]>(getGenresUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
