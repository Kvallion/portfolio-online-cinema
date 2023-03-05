import cn from "clsx"
import { MenuItem, MenuItemProps } from "../MenuItem"
import s from "./MenuItemButton.module.scss"

interface MenuItemButtonProps extends MenuItemProps {
	onClick: (...args: any) => any
	className?: string
}

const MenuItemButton: React.FC<MenuItemButtonProps> = ({
	onClick,
	className,
	...rest
}) => {
	return (
		<div className={cn("cursor-pointer")} role="button" onClick={onClick}>
			<MenuItem {...rest} className={className} />
		</div>
	)
}

export { MenuItemButton }
