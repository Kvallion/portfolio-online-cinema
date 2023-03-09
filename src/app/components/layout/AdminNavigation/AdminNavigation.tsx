import cn from "clsx"
import layout from "@components/layout/Layout.module.scss"
import { AdminNavItem } from "./AdminNavItem"
import s from "./AdminNavigation.module.scss"
import { navItems } from "./adminNavigation.data"

interface AdminNavigationProps {}

const AdminNavigation: React.FC<AdminNavigationProps> = () => {
	return (
		<div className={s.margin}>
			<nav className={cn(layout.admin_navigation, s.nav)}>
				<ul className={s.list}>
					{navItems.map((item) => (
						<AdminNavItem key={item.link} {...item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export { AdminNavigation }
