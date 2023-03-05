import { configureStore } from "@reduxjs/toolkit"
import { reducer as ToastReducer } from "react-redux-toastr"
import { UserReducer } from "@store/user/user.slice"

const createStore = () =>
	configureStore({
		reducer: {
			user: UserReducer,
			toastr: ToastReducer,
		},
		devTools: true,
	})

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
