import { Menu } from "@components/layout/Navigation/components/Menu"

import { MenuItemProps } from "../MenuItem"
import { firstMenu, userMenu } from "./menu.data"

import s from "./MenuContainer.module.scss"

interface MenuContainerProps {}

const MenuContainer: React.FC<MenuContainerProps> = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<Menu {...userMenu} />
		</div>
	)
}

export { MenuContainer }
