import { AdminNavigation } from "@components/layout/AdminNavigation"
import s from "./Layout.module.scss"
import { Navigation } from "./Navigation"
import { Sidebar } from "./Sidebar"

interface LayoutProps {
	children: React.ReactNode
	onlyAdmin: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, onlyAdmin }) => {
	return (
		<div className={s.layout}>
			{onlyAdmin && <AdminNavigation />}
			<Navigation />
			<div className={s.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export { Layout }
