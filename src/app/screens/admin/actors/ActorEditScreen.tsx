import { useRouter } from "next/router"
import { Controller, useForm } from "react-hook-form"

import { AdminEditBtns } from "@components/admin/AdminEditForm/AdminEditBtns"
import { SlugField } from "@components/admin/AdminEditForm/SlugField"

import SkeletonLoader from "@ui/SkeletonLoader"
import { Button } from "@ui/formElements/Button"
import { TextField } from "@ui/formElements/TextField"
import { UploadField } from "@ui/formElements/UploadField"
import Heading from "@ui/heading/Heading"

import generateSlug from "@utils/string/generateSlug"

import s from "../genres/GenreEditScreen.module.scss"
import { EditActorData } from "./actor.types"
import useActorEdit from "./useActorEdit"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const ActorEditScreen: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
		setValue,
		control,
	} = useForm<EditActorData>({ mode: "onBlur" })

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<main>
			<Heading text="Edit actor" className="mb-4" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={s.fields}>
							<TextField
								{...register("name", {
									required: "Full name is required",
								})}
								placeholder="Full name"
								error={errors.name}
								isPlaceholderLifted
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() =>
									setValue(
										"slug",
										generateSlug(getValues().name)
									)
								}
							/>
						</div>
						<Controller
							control={control}
							name="photo"
							rules={{
								required: "Photo is required",
							}}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									uri={value}
									error={error}
									folder="actors"
									placeholder="Photo"
								/>
							)}
						/>

						<AdminEditBtns />
					</>
				)}
			</form>
		</main>
	)
}

export default ActorEditScreen
