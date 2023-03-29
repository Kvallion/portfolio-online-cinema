import cn from "clsx"
import dynamic from "next/dynamic"
import { Controller, useForm } from "react-hook-form"

import { AdminEditBtns } from "@components/admin/AdminEditForm/AdminEditBtns"
import { SlugField } from "@components/admin/AdminEditForm/SlugField"

import SkeletonLoader from "@ui/SkeletonLoader"
import { TextField } from "@ui/formElements/TextField"
import { UploadField } from "@ui/formElements/UploadField"
import { field } from "@ui/formElements/common.module.scss"
import Heading from "@ui/heading/Heading"

import generateSlug from "@utils/string/generateSlug"

import s from "./MovieEditScreen.module.scss"
import useActorsForSelect from "./hooks/useActorsForSelect"
import useGenresForSelect from "./hooks/useGenresForSelect"
import useMovieEdit from "./hooks/useMovieEdit"
import { EditMovieData } from "./movie.types"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const DynamicSelect = dynamic(
	async () => (await import("@ui/formElements/Select")).Select,
	{ ssr: false }
)

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

	const { genres, isGenresLoading } = useGenresForSelect()
	const { actors, isActorsLoading } = useActorsForSelect()

	const genSlug = () => setValue("slug", generateSlug(getValues().title))

	return (
		<main>
			<Heading text="Edit movie" className="mb-4" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={s.layout_row}>
							<TextField
								{...register("title", {
									required: "Title is required",
								})}
								onBlur={genSlug}
								placeholder="title"
								error={errors.title}
								isPlaceholderLifted
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={genSlug}
								className="w-full"
							/>
						</div>
						<div className={s.layout_row}>
							<TextField
								{...register("parameters.country", {
									required: "Country is required",
								})}
								placeholder="country"
								error={errors.parameters?.country}
								isPlaceholderLifted
							/>
							<TextField
								{...register("parameters.duration", {
									required: "Duration is required",
								})}
								placeholder="duration"
								error={errors.parameters?.duration}
								isPlaceholderLifted
							/>
							<TextField
								{...register("parameters.year", {
									required: "Year is required",
								})}
								placeholder="year"
								error={errors.parameters?.year}
								isPlaceholderLifted
							/>
						</div>
						<div className={s.layout_row}>
							<Controller
								control={control}
								name="genres"
								rules={{
									required: "Genres are required",
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										isMulti
										options={genres || []}
										placeholder="Genres"
										isLoading={isGenresLoading}
										error={error}
									/>
								)}
							/>
							<Controller
								control={control}
								name="actors"
								rules={{
									required: "Actors are required",
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										isMulti
										options={actors || []}
										placeholder="Actors"
										isLoading={isActorsLoading}
										error={error}
									/>
								)}
							/>
						</div>

						<div className={cn(s.layout_row, s.no_mb)}>
							<Controller
								control={control}
								name="poster"
								rules={{
									required: "Poster is required",
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										uri={value}
										folder="movies"
										placeholder="poster"
										error={error}
									/>
								)}
							/>
							<Controller
								control={control}
								name="bigPoster"
								rules={{
									required: "Big poster is required",
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										uri={value}
										folder="movies"
										placeholder="big poster"
										error={error}
									/>
								)}
							/>
						</div>

						<div className={s.layout_row}>
							<Controller
								control={control}
								name="videoUrl"
								rules={{
									required: "Video is required",
								}}
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										uri={value}
										folder="movies"
										placeholder="video"
										error={error}
										isImage={false}
									/>
								)}
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

export default MovieEditScreen
