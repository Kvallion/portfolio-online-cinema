import { createAsyncThunk } from "@reduxjs/toolkit"
import { toastr } from "react-redux-toastr"
import { getErrorMsg } from "@services/api/errors"
import { authService } from "@services/auth/auth.service"
import { toastError } from "@utils/toastError"
import { AuthCredentials, AuthResponse } from "./user.interface"

export const register = createAsyncThunk<AuthResponse, AuthCredentials>(
	"auth/register",
	async (credentials, thunkApi) => {
		try {
			const data = await authService.auth("register", credentials)
			toastr.success("Registration", "Completed successfully")
			return data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<AuthResponse, AuthCredentials>(
	"auth/login",
	async (credentials, thunkApi) => {
		try {
			const data = await authService.auth("login", credentials)
			toastr.success("Login", "Completed successfully")
			return data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
	authService.logout()
})

export const refresh = createAsyncThunk<AuthResponse, void>(
	"auth/refresh",
	async (_, thunkApi) => {
		try {
			const response = await authService.refresh()
			return response
		} catch (error) {
			if (getErrorMsg(error) === "jwt expired") {
				toastr.error(
					"Logout",
					"Your authorization failed, please sign in again"
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
