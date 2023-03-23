import cn from "clsx"
import Image from "next/image"
import { ChangeEvent } from "react"
import { FieldError } from "react-hook-form"

import SkeletonLoader from "@ui/SkeletonLoader"

import { WithClasses } from "@hooks/useClasses"
import useClasses from "@hooks/useClasses"

import fieldStyles from "../TextField/TextField.module.scss"
import commonFormStyles from "../common.module.scss"
import s from "./UploadField.module.scss"
import useFileUpload from "./useFileUpload"

type UploadFieldProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	folder?: string
	placeholder?: string
	uri?: string
	isImage?: boolean
	error?: FieldError
} & WithClasses

const UploadField: React.FC<UploadFieldProps> = ({
	onChange,
	folder,
	placeholder,
	uri,
	isImage = true,
	error,
	className,
	classes,
}) => {
	const rootCn = useClasses(className ? className : classes || [])
	const { isLoading, uploadFile } = useFileUpload(onChange, folder)
	return (
		<div className={rootCn(commonFormStyles.field, s.upload_field)}>
			<div className="flex">
				<label className={s.label}>
					<span className={commonFormStyles.placeholder}>
						{placeholder}
					</span>
					<input
						type="file"
						onChange={uploadFile}
						className={s.file_input}
					/>
					{error && <div className={s.error}>{error.message}</div>}
				</label>

				{uri && (
					<div className={s.upload_image_container}>
						{isLoading ? (
							<SkeletonLoader
								count={1}
								className={"w-full h-full animate-fade"}
							/>
						) : (
							isImage && (
								<Image
									src={uri}
									alt="selected image"
									width={96}
									height={96}
									className={s.image}
									unoptimized
								/>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export { UploadField }
