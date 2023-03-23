import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useMutation } from "react-query"

import { FileService } from "@services/file.service"

import { toastError } from "@utils/toastError"

type FileUploadReturn = {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export default function useFileUpload(
	onChange: (...args: any[]) => void,
	folder?: string
): FileUploadReturn {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		"upload file",
		(file: FormData) => FileService.upload(file, folder),
		{
			onSuccess(data) {
				setIsLoading(false)
				onChange(data[0].url)
			},
			onError: (err) => toastError(err, "Get actor"),
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append("image", files[0])

			await mutateAsync(formData)
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
