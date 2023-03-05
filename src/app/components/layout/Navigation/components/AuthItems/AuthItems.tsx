import { MenuItem } from "@components/layout/Navigation/components/MenuItem"
import { useAuth } from "@hooks/useAuth"
import { adminHomeUrl } from "@config/helpers/paths/api"
import { LogoutButton } from "../LogoutButton"

interface AuthItemsProps {}

const AuthItems: React.FC<AuthItemsProps> = () => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItem
						icon="MdAccountCircle"
						link="/profile"
						title="Profile"
					/>
					<LogoutButton />
					{user.isAdmin && (
						<MenuItem
							icon="MdOutlineLock"
							link={adminHomeUrl}
							title="Admin panel"
						/>
					)}
				</>
			) : (
				<>
					<MenuItem icon="MdLogin" link="/auth" title="Authorize" />
				</>
			)}
		</>
	)
}

export { AuthItems }
