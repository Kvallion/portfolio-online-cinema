import Cookies from "js-cookie"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useActions } from "@hooks/useActions"
import { useAuth } from "@hooks/useAuth"
import { HasChildren } from "@shared/types/components.utility.types"
import { HasRoleConfig, RoleAccessConfig } from "@shared/types/roles.types"

const DynamicCheckRole = dynamic(() => import("./CheckRole"), { ssr: false })

interface AuthProviderProps extends HasRoleConfig, HasChildren {}

const AuthProvider: React.FC<AuthProviderProps> = ({
	roleConfig: { onlyAdmin, onlyUser },
	children,
}) => {
	const { user } = useAuth()
	const { logout, refresh } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get("accessToken")
		if (accessToken) refresh()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get("refreshToken")
		if (!refreshToken && user) logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	return !onlyUser && !onlyAdmin ? (
		<>{children}</>
	) : (
		<DynamicCheckRole roleConfig={{ onlyAdmin, onlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
