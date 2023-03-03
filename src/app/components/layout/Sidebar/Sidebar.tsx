import s from "./Sidebar.module.scss"
import { MoviesContainer } from "./components/MoviesContainer"
import { Search } from "./components/Search"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<aside className={s.sidebar}>
			<Search />
			<MoviesContainer />
		</aside>
	)
}

export { Sidebar }
