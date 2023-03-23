import cn from "clsx"
import { ButtonHTMLAttributes, HTMLAttributes } from "react"

import s from "./Button.module.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = "primary",
	...rest
}) => {
	return (
		<button
			className={cn(s.button, className, {
				[s.secondary]: variant === "secondary",
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export { Button }
