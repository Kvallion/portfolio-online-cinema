import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "@hooks/useAuth"

export function useAuthRedirect() {
	const { user } = useAuth()

	const { query, push } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : "/"

	useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}
