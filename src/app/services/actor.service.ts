import { EditActorData } from "@screens/admin/actors/actor.types"

import { Actor } from "@shared/types/movie.types"

import { getActorsUrl } from "@config/helpers/paths/api"

import { axiosPrivate } from "./api/interceptors"

export const ActorService = {
	async getAll(searchTerm?: string, limit?: number) {
		const { data } = await axiosPrivate.get<Actor[]>(getActorsUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
		return limit ? data.slice(0, limit) : data
	},
	async getById(id: string) {
		return axiosPrivate.get<EditActorData>(getActorsUrl(`/${id}`))
	},

	async create() {
		return axiosPrivate.post<string>(getActorsUrl())
	},
	async update(id: string, data: EditActorData) {
		return axiosPrivate.put<string>(getActorsUrl(`/${id}`), data)
	},

	async deleteActor(id: string) {
		return axiosPrivate.delete<string>(getActorsUrl(`/${id}`))
	},
}
