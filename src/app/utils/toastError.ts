import { toastr } from "react-redux-toastr"
import { getErrorMsg } from "@services/api/errors"

export function toastError(error: any, title?: string) {
	const message = getErrorMsg(error)
	toastr.error(title || "Error request", message)
	throw message
}
