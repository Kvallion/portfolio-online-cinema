import { User } from "@shared/types/user.types"
import { getUsersUrl } from "@config/helpers/paths/api"
import { axiosPrivate } from "./api/interceptors"

export const UserService = {
	async getAll(searchTerm?: string) {
		return axiosPrivate.get<User[]>(getUsersUrl(), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteUser(id: string) {
		return axiosPrivate.delete<string>(getUsersUrl(`/${id}`))
	},
}
