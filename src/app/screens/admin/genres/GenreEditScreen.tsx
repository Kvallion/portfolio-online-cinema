import dynamic from "next/dynamic"
import { Controller, useForm } from "react-hook-form"
import { stripHtml } from "string-strip-html"

import { AdminEditBtns } from "@components/admin/AdminEditForm/AdminEditBtns"
import { SlugField } from "@components/admin/AdminEditForm/SlugField"

import SkeletonLoader from "@ui/SkeletonLoader"
import { Button } from "@ui/formElements/Button"
import { TextField } from "@ui/formElements/TextField"
import Heading from "@ui/heading/Heading"

import generateSlug from "@utils/string/generateSlug"

import s from "./GenreEditScreen.module.scss"
import { EditGenreData } from "./genre.types"
import useGenreEdit from "./useGenreEdit"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const DynamicTextEditor = dynamic(
	async () => (await import("@ui/formElements/TextEditor")).TextEditor,
	{ ssr: false }
)

const GenreEditScreen: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		getValues,
		setValue,
		control,
	} = useForm<EditGenreData>({ mode: "onBlur" })

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<main>
			<Heading text="Edit genre" className="mb-4" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
								required: false,
							}}
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<DynamicTextEditor
									className="mb-8"
									value={value}
									onChange={onChange}
									error={error}
									placeholder="Description"
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

export default GenreEditScreen
