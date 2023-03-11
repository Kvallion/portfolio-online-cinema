import cn from "clsx"
import { ButtonHTMLAttributes, HTMLAttributes } from "react"
import s from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(s.button, className)} {...rest}>
			{children}
		</button>
	)
}

export { Button }
