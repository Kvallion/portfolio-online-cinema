import { useRouter } from "next/router"

import { useAuth } from "@hooks/useAuth"

import { HasChildren } from "@shared/types/components.utility.types"
import { RoleAccessConfig } from "@shared/types/roles.types"

type CheckRoleProps = HasChildren & {
	roleConfig: RoleAccessConfig
}

const CheckRole: React.FC<CheckRoleProps> = ({
	children,
	roleConfig: { onlyAdmin, onlyUser },
}) => {
	const router = useRouter()
	const { user } = useAuth()

	const isUser = user && !user.isAdmin
	const isAdmin = user && user.isAdmin

	const Children = () => <>{children}</>

	// if (isPublic) return <Children /> // in AuthProvider

	if (isAdmin) return <Children />

	if (onlyAdmin && !isAdmin) {
		router.pathname !== "/404" && router.replace("/404")
		return null
	}
	if (onlyUser && isUser) return <Children />
	else {
		router.pathname !== "/auth" && router.replace("/auth")
		return null
	}
}

export default CheckRole
