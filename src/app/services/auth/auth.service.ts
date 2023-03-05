import { Cookies } from "js-cookie"
import { axiosPublic } from "@services/api/interceptors"
import { AuthCredentials, AuthResponse } from "@store/user/user.interface"
import { getAuthUrl } from "@config/helpers/paths/api"
import { ContentTypeJson } from "./../api/consts"
import { removeUserData, saveToStorage } from "./auth.helper"

export const authService = {
	async auth(type: "login" | "register", credentials: AuthCredentials) {
		const response = await axiosPublic.post<AuthResponse>(
			getAuthUrl(type),
			credentials
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response.data
	},
	logout() {
		removeUserData()
	},

	async refresh() {
		const refreshToken = Cookies.get("refreshToken")
		const response = await axiosPublic.post<AuthResponse>(
			getAuthUrl("/login/access-token"),
			{ refreshToken },
			{ headers: ContentTypeJson }
		)
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response.data
	},
}
