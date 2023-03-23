import cn from "clsx"

import MaterialIcon from "@ui/MaterialIcon"

import { useLogger } from "@hooks/useLogger"

import s from "./SliderArrow.module.scss"

type SliderArrowProps = {
	direction: "left" | "right"
	disabled?: boolean
	clickHandler: () => void
}

const SliderArrow: React.FC<SliderArrowProps> = ({
	direction,
	disabled = false,
	clickHandler,
}) => {
	const isLeft = direction === "left"
	useLogger(disabled, `${direction} disabled`)

	return (
		<button
			onClick={clickHandler}
			className={cn(s.arrow, {
				[s.left]: isLeft,
				[s.right]: !isLeft,
				[s.disabled]: disabled,
			})}
			disabled={disabled}
		>
			<MaterialIcon name={isLeft ? "MdChevronLeft" : "MdChevronRight"} />
		</button>
	)
}

export { SliderArrow }
