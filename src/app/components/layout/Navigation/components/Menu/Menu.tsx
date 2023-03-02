import {
	MenuItem,
	MenuItemProps,
} from "@components/layout/Navigation/components/MenuItem"

import { AuthItems } from "../AuthItems"
import s from "./Menu.module.scss"

export interface MenuProps {
	title: string
	items: MenuItemProps[]
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
	return (
		<nav className={s.menu}>
			<h4 className={s.heading}>{title}</h4>
			<ul>
				{items.map((item) => (
					<MenuItem key={item.link} {...item} />
				))}
				{title === "general" && <AuthItems />}
			</ul>
		</nav>
	)
}

export { Menu }
