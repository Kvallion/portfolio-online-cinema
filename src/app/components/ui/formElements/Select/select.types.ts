import { ControllerRenderProps } from "react-hook-form"
import { Options } from "react-select"

import { TextFieldProps } from "../TextField"

export type SelectOption = {
	value: string
	label: string
}

export type SelectProps = TextFieldProps & {
	options: Options<SelectOption>
	isMulti: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
}
