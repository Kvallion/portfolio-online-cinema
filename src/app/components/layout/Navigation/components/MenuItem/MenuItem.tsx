import cn from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import MaterialIcon from "@ui/MaterialIcon"
import { MaterialIconName } from "@shared/types/icons.types"
import s from "./MenuItem.module.scss"

export type MenuItemProps = {
	icon: MaterialIconName
	title: string
	link: string
	disableActive?: boolean
	className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
	icon,
	title,
	link,
	disableActive = false,
	className,
}) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn(s.item, className, {
				[s.active]: !disableActive && asPath === link,
			})}
		>
			<Link href={link} className={s.link}>
				<MaterialIcon name={icon} className={s.icon} />
				<span className={s.text}>{title}</span>
			</Link>
		</li>
	)
}

export { MenuItem }
