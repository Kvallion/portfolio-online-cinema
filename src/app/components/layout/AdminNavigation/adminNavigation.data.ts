import { getAdminUrl } from "@config/helpers/paths/api"
import { AdminNavItemProps } from "./AdminNavItem"

export const navItems: AdminNavItemProps[] = [
	{ title: "Statistics", icon: "MdBarChart", link: getAdminUrl("") },
	{ title: "Users", icon: "MdPeople", link: getAdminUrl("/users") },
	{ title: "Movies", icon: "MdLocalMovies", link: getAdminUrl("/movies") },
	{ title: "Actors", icon: "MdAccessibility", link: getAdminUrl("/actors") },
	{ title: "Genres", icon: "MdTheaterComedy", link: getAdminUrl("/genres") },
]
