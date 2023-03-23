import { axiosPrivate } from "./api/interceptors"

export type FileUploadResp = { url: string; name: string }[]

export const FileService = {
	async upload(file: FormData, folder?: string) {
		const response = await axiosPrivate.post<FileUploadResp>(
			`/files`,
			file,
			{
				params: { folder },
				headers: { "Content-Type": "multipart/form-data" },
			}
		)
		return response.data
	},
}
