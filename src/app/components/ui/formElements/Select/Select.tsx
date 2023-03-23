import { useMemo } from "react"
import ReactSelect, {
	MultiValue,
	OnChangeValue,
	SingleValue,
} from "react-select"
import makeAnimated from "react-select/animated"

import commonFormStyles from "../common.module.scss"
import s from "./Select.module.scss"
import { SelectOption, SelectProps } from "./select.types"

const Select: React.FC<SelectProps> = ({
	field,
	isMulti,
	options,
	placeholder,
	isLoading,
	error,
}) => {
	const values = useMemo(() => {
		if (field.value) {
			return isMulti
				? (field.value as string[]).map((id) =>
						options.find((option) => id === option.value)
				  )
				: options.find((opiton) => opiton.value === field.value)
		} else {
			return isMulti ? [] : ""
		}
	}, [field.value, options, isMulti])

	function onChange(
		newValue: OnChangeValue<string | SelectOption | undefined, boolean>
	) {
		field.onChange(
			isMulti
				? (newValue as MultiValue<SelectOption>).map(
						(item) => item.value
				  )
				: (newValue as SingleValue<SelectOption>)!.value
		)
	}

	return (
		<div className={s.select_container}>
			<label>
				<span className={commonFormStyles.placeholder}>
					{placeholder}
				</span>
				<ReactSelect
					classNamePrefix="custom-select"
					options={options}
					value={values}
					isMulti={isMulti}
					onChange={onChange}
					components={makeAnimated()}
					isLoading={isLoading}
				/>
			</label>
			{error && (
				<div className={commonFormStyles.error}>{error.message}</div>
			)}
		</div>
	)
}

export { Select }
