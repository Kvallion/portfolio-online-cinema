import s from "./Navigation.module.scss"
import Logo from "./components/Logo"
import { MenuContainer } from "./components/MenuContainer"

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
	return (
		<div className={s.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export { Navigation }
