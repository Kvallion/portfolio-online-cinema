import cn from "clsx"
import { InputHTMLAttributes, forwardRef, useEffect } from "react"
import { FieldError } from "react-hook-form"
import { useLogger } from "@hooks/useLogger"
import s from "./TextField.module.scss"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: FieldError
	isPlaceholderLifted?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			placeholder,
			isPlaceholderLifted = false,
			error,
			type = "text",
			className,
			style,
			value,
			...rest
		},
		ref
	) => {
		useLogger(ref)
		return (
			<div className={cn(s.wrapper, className)}>
				<div className={s.field} style={style}>
					<label className={s.label}>
						<span
							className={cn(s.placeholder, {
								[s.lifted_placeholder]:
									!!value || isPlaceholderLifted,
							})}
						>
							{placeholder}
						</span>
						<input
							className={s.input}
							ref={ref}
							type={type}
							value={value}
							{...rest}
						/>
					</label>
				</div>
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)

TextField.displayName = "TextField"
export { TextField }
