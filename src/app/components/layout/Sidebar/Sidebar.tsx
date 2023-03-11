import cn from "clsx"
import layout from "../Layout.module.scss"
import s from "./Sidebar.module.scss"
import { MoviesContainer } from "./components/MoviesContainer"
import { Search } from "./components/Search"

type SidebarProps = {}

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<aside className={cn(layout.sidebar, s.sidebar)}>
			<Search />
			<MoviesContainer />
		</aside>
	)
}

export { Sidebar }
