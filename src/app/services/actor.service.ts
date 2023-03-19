import { EditActorData } from "@screens/admin/actors/actor.types"

import { Actor } from "@shared/types/movie.types"

import { getActorsUrl } from "@config/helpers/paths/api"
import { getActorUrl } from "@config/helpers/paths/singleEntity"

import { axiosPrivate } from "./api/interceptors"

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosPrivate.get<Actor[]>(getActorsUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getById(id: string) {
		return axiosPrivate.get<EditActorData>(getActorsUrl(`/${id}`))
	},

	async create() {
		return axiosPrivate.post<string>(getActorsUrl())
	},
	async update(id: string, data: EditActorData) {
		return axiosPrivate.put<string>(getActorUrl(`/${id}`), data)
	},

	async deleteActor(id: string) {
		return axiosPrivate.delete<string>(getActorsUrl(`/${id}`))
	},
}
