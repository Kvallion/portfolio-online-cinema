import { MenuProps } from "@components/layout/Navigation/components/Menu"

export const firstMenu: MenuProps = {
	title: "menu",
	items: [
		{ icon: "MdHome", link: "/", title: "Home" },
		{ icon: "MdExplore", link: "/discovery", title: "Discovery" },
		{ icon: "MdWineBar", link: "/fresh-movies", title: "Fresh movies" },
		{ icon: "MdWhatshot", link: "/trending", title: "Trending now" },
	],
}

export const userMenu: MenuProps = {
	title: "general",
	items: [],
}
