import cn from "clsx"
import s from "./ButtonGroup.module.scss"

interface ButtonGroupProps {
	children: React.ReactNode[]
	className?: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => {
	return <div className={cn(s.btn_group, className)}>{children}</div>
}

export { ButtonGroup }
