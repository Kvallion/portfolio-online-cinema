import dynamic from "next/dynamic"
import { Controller, useForm } from "react-hook-form"
import { stripHtml } from "string-strip-html"

import { SlugField } from "@components/admin/AdminEditForm/SlugField"

import SkeletonLoader from "@ui/SkeletonLoader"
import { Button } from "@ui/formElements/Button"
import { TextField } from "@ui/formElements/TextField"
import Heading from "@ui/heading/Heading"

import generateSlug from "@utils/string/generateSlug"

import s from "./MovieEditScreen.module.scss"
import { EditMovieData } from "./movie.types"
import useMovieEdit from "./useMovieEdit"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const DynamicTextEditor = dynamic(
	async () => (await import("@ui/formElements/TextEditor")).TextEditor,
	{ ssr: false }
)

const MovieEditScreen: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
		setValue,
		control,
	} = useForm<EditMovieData>({ mode: "onBlur" })

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<main>
			<Heading text="Edit movie" className="mb-4" />
			{/* <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={s.fields}>
							<TextField
								{...register("name", {
									required: "Name is required",
								})}
								placeholder="Name"
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

							<TextField
								{...register("icon", {
									required: "Icon is required",
								})}
								placeholder="Icon"
								error={errors.icon}
								isPlaceholderLifted
							/>
						</div>
						<Controller
							control={control}
							name="description"
							defaultValue=""
							rules={{
								required: "Poster is required",
							}}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => <></>}
						/>

						<Button type="submit">Save</Button>
					</>
				)}
			</form> */}
		</main>
	)
}

export default MovieEditScreen
