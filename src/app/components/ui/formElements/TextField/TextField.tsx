import cn from "clsx"
import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import s from "./TextField.module.scss"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: FieldError
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ placeholder, error, type = "text", className, style, ...rest }, ref) => {
		return (
			<div className={s.wrapper}>
				<div className={s.field} style={style}>
					<label className={s.label}>
						<span className={s.placeholder}>{placeholder}</span>
						<input
							className={s.input}
							ref={ref}
							type={type}
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
