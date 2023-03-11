import { Genre } from "@shared/types/movie.types"
import { getGenresUrl } from "@config/helpers/paths/api"
import { axiosPrivate, axiosPublic } from "./api/interceptors"

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosPublic.get<Genre[]>(getGenresUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteGenre(id: string) {
		return axiosPrivate.delete<string>(getGenresUrl(`/${id}`))
	},
}
