import dynamic from "next/dynamic"

import {
	MenuItem,
	MenuItemProps,
} from "@components/layout/Navigation/components/MenuItem"

import s from "./Menu.module.scss"

const DynamicAuthItems = dynamic(
	async () => (await import("../AuthItems")).AuthItems,
	{ ssr: false }
)

export type MenuProps = {
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
				{title === "general" && <DynamicAuthItems />}
			</ul>
		</nav>
	)
}

export { Menu }
