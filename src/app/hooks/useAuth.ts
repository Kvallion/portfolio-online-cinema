import { selectUser } from "@store/user/user.slice"
import { useAppSelector } from "./redux"

export function useAuth() {
	return useAppSelector(selectUser)
}
