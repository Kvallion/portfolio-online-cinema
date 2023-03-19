import { FieldError, UseFormRegister } from "react-hook-form"
import { TextField } from "@ui/formElements/TextField"
import useClasses, { WithClasses } from "@hooks/useClasses"
import s from "./SlugField.module.scss"

type SlugFieldProps = {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
} & WithClasses

const SlugField: React.FC<SlugFieldProps> = ({
	error,
	register,
	generate,
	classes,
	className,
}) => {
	const cn = useClasses(classes ? classes : className)
	return (
		<div className={cn("relative")}>
			<TextField
				{...register("slug", { required: "Slug is required" })}
				placeholder="Slug"
				error={error}
				isPlaceholderLifted
			/>
			<button type="button" className={s.badge} onClick={generate}>
				generate
			</button>
		</div>
	)
}

export { SlugField }
