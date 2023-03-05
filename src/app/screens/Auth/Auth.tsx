import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@components/ui/formElements/Button"
import { ButtonGroup } from "@components/ui/formElements/ButtonGroup"
import Heading from "@ui/heading/Heading"
import { useActions } from "@hooks/useActions"
import { useAuth } from "@hooks/useAuth"
import s from "./Auth.module.scss"
import { AuthForm } from "./auth.interface"
import { AuthFields } from "./components/AuthFields"
import { useAuthRedirect } from "./useAuthRedirect"

interface AuthProps {}

const Auth: React.FC<AuthProps> = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const [type, setType] = useState<"login" | "register">("login")

	const {
		register: regInput,
		handleSubmit,
		formState,
	} = useForm<AuthForm>({
		mode: "onBlur",
	})

	const { register, login } = useActions()

	const onSubmit: SubmitHandler<AuthForm> = (data) => {
		if (type === "login") login(data)
		else if (type === "register") register(data)
	}
	return (
		<main className={s.root}>
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<Heading text="Authorization" className="mb-6" />

				<AuthFields
					register={regInput}
					formState={formState}
					isPasswordRequired
				/>

				<ButtonGroup className="justify-center">
					<Button
						type="submit"
						onClick={() => setType("login")}
						disabled={isLoading}
					>
						Login
					</Button>
					<Button
						type="submit"
						onClick={() => setType("register")}
						disabled={isLoading}
					>
						Register
					</Button>
				</ButtonGroup>
			</form>
		</main>
	)
}

export { Auth }
