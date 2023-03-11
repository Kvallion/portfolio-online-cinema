import { Actor } from "@shared/types/movie.types"
import { getActorsUrl } from "@config/helpers/paths/api"
import { axiosPrivate } from "./api/interceptors"

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosPrivate.get<Actor[]>(getActorsUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteActor(id: string) {
		return axiosPrivate.delete<string>(getActorsUrl(`/${id}`))
	},
}
