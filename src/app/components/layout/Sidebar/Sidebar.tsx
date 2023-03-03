import s from "./Sidebar.module.scss"
import { Search } from "./components/Search"

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	return (
		<div>
			<Search />
		</div>
	)
}

export { Sidebar }
