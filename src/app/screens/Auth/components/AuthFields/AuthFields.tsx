import { FormState, UseFormRegister } from "react-hook-form"
import { AuthForm } from "@screens/Auth/auth.interface"
import { TextField } from "@components/ui/formElements/TextField"
import { strongPassword, validEmail } from "@shared/regex"
import s from "./AuthFields.module.scss"

type AuthFieldsProps = {
	register: UseFormRegister<AuthForm>
	formState: FormState<AuthForm>
	isPasswordRequired?: boolean
}

const AuthFields: React.FC<AuthFieldsProps> = ({
	register,
	formState: { errors, dirtyFields },
	isPasswordRequired = false,
}) => {
	return (
		<div className={s.stack}>
			<TextField
				{...register("email", {
					required: "Email is required",
					pattern: {
						value: validEmail,
						message: "Please enter a valid email address",
					},
				})}
				placeholder="Email"
				error={errors.email}
				isPlaceholderLifted={dirtyFields.email}
			/>
			<TextField
				{...register(
					"password",
					isPasswordRequired
						? {
								required: "Password is required",
								minLength: {
									value: 8,
									message:
										"Password must be at least 8 characters",
								},
								pattern: {
									value: strongPassword,
									message:
										"Password must contain one capital letter, one lowercase letter and one digit",
								},
						  }
						: {}
				)}
				type="password"
				placeholder="Password"
				isPlaceholderLifted={dirtyFields.password}
				error={errors.password}
			/>
		</div>
	)
}

export { AuthFields }
