import { User } from "@shared/types/user.types"

export interface UserState {
	email: string
	isAdmin: boolean
}

export interface Tokens {
	accessToken: string
	refreshToken: string
}

export interface InitialState {
	user: UserState | null
	isLoading: boolean
}

export interface AuthCredentials {
	email: string
	password: string
}

export interface AuthResponse extends Tokens {
	user: User
}
