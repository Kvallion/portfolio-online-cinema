import s from "./Layout.module.scss"
import { Navigation } from "./Navigation"
import { Sidebar } from "./Sidebar"

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation />
			<div className={s.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export { Layout }
