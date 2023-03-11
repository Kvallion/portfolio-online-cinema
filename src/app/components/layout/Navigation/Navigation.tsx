import cn from "clsx"
import layout from "../Layout.module.scss"
import s from "./Navigation.module.scss"
import Logo from "./components/Logo"
import { MenuContainer } from "./components/MenuContainer"

type NavigationProps = {}

const Navigation: React.FC<NavigationProps> = () => {
	return (
		<aside className={cn(layout.navigation, s.navigation)}>
			<Logo />
			<MenuContainer />
		</aside>
	)
}

export { Navigation }
