import { Button } from "@components/ui/formElements/Button"
import { useActions } from "@hooks/useActions"
import { MenuItemButton } from "../MenuItemButton"

interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
	const { logout } = useActions()

	return (
		<MenuItemButton
			onClick={() => logout()}
			title="Logout"
			link="/"
			icon="MdLogout"
			disableActive
		/>
	)
}

export { LogoutButton }
