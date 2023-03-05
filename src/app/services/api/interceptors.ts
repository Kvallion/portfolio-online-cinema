import axios from "axios"
import Cookies from "js-cookie"
import { getErrorMsg } from "@services/api/errors"
import { removeUserData } from "@services/auth/auth.helper"
import { authService } from "@services/auth/auth.service"
import { store } from "@store/store"
import { logout } from "@store/user/user.actions"
import { API_URL } from "@config/api.config"
import { ContentTypeJson } from "./consts"

const { dispatch } = store

export const axiosPublic = axios.create({
	baseURL: API_URL,
	headers: ContentTypeJson,
})

const axiosPrivate = axios.create({
	baseURL: API_URL,
	headers: ContentTypeJson,
})

axiosPrivate.interceptors.request.use((config) => {
	const accessToken = Cookies.get("accessToken")
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})

axiosPrivate.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalReq = error.config
		const msg = getErrorMsg(error)

		if (
			error.response.status === 401 ||
			msg === "jwt expired" ||
			(msg === "jwt must be provided" &&
				error.config &&
				!error.response._isRetry)
		) {
			originalReq._isRetry = true
			try {
				await authService.refresh()
				return axiosPrivate.request(originalReq)
			} catch (error) {
				if (getErrorMsg(error) === "jwt expired") {
					dispatch(logout())
				}
			}
		}
		throw error
	}
)

export { axiosPrivate }
