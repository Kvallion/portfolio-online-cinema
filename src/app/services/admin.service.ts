import { getUsersUrl } from "@config/helpers/paths/api"
import { axiosPrivate } from "./api/interceptors"

export const AdminService = {
	async getUsersCount() {
		const response = await axiosPrivate.get<number>(getUsersUrl("/count"))
		return response.data
	},
}
