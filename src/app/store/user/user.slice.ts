import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "@store/store"
import { getStoreLocal } from "@utils/localStorage"
import { login, logout, refresh, register } from "./user.actions"
import { InitialState } from "./user.interface"

const initialState: InitialState = {
	user: getStoreLocal("user"),
	isLoading: false,
}

const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload: { user } }) => {
				state.isLoading = false
				state.user = user
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})

			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload: { user } }) => {
				state.isLoading = false
				state.user = user
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})

			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})

			.addCase(refresh.pending, (state) => {
				state.isLoading = true
			})
			.addCase(refresh.fulfilled, (state, { payload: { user } }) => {
				state.isLoading = false
				state.user = user
			})
			.addCase(refresh.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
	},
})

export const userActions = UserSlice.actions

export const selectUser = (state: RootState) => state.user

export const UserReducer = UserSlice.reducer
