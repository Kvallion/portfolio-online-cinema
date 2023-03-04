import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@components/ui/formElements/Button"
import { ButtonGroup } from "@components/ui/formElements/ButtonGroup"
import Heading from "@ui/heading/Heading"
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
		reset,
	} = useForm<AuthForm>({
		mode: "onBlur",
	})

	function login(data: AuthForm) {
		alert(`Login ${data}`)
	}
	function register(data: AuthForm) {
		alert(`Register ${data}`)
	}

	const onSubmit: SubmitHandler<AuthForm> = (data) => {
		if (type === "login") login(data)
		else if (type === "register") register(data)

		reset()
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

				<ButtonGroup>
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
