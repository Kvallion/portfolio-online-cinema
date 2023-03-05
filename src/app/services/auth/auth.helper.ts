import Cookies from "js-cookie"
import { AuthResponse } from "@store/user/user.interface"

export function saveToStorage(data: AuthResponse) {
	Cookies.set("accessToken", data.accessToken)
	Cookies.set("refreshToken", data.refreshToken)

	localStorage.setItem("user", JSON.stringify(data.user))
}

export function removeUserData() {
	Cookies.remove("accessToken")
	Cookies.remove("refreshToken")

	localStorage.removeItem("user")
}
