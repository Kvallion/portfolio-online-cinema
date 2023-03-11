import cn from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import MaterialIcon from "@ui/MaterialIcon"
import { MaterialIconName } from "@shared/types/icons.types"
import s from "./AdminNavigation.module.scss"

export type AdminNavItemProps = {
	icon: MaterialIconName
	title: string
	link: string
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({ title, link, icon }) => {
	const { asPath } = useRouter()

	return (
		<li className={cn(s.item, { [s.active]: asPath === link })}>
			<Link href={link} className={s.link}>
				<MaterialIcon name={icon} className={s.icon} />
				<span className={s.text}>{title}</span>
			</Link>
		</li>
	)
}

export { AdminNavItem }
