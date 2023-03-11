import { GenreMenu } from "@components/layout/Navigation/components/GenreMenu"
import { Menu } from "@components/layout/Navigation/components/Menu"
import { MenuItemProps } from "../MenuItem"
import s from "./MenuContainer.module.scss"
import { firstMenu, userMenu } from "./menu.data"

type MenuContainerProps = {}

const MenuContainer: React.FC<MenuContainerProps> = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenreMenu />
			<Menu {...userMenu} />
		</div>
	)
}

export { MenuContainer }
