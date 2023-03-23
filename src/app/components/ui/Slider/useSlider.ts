import { useState } from "react"

import { useLogger } from "@hooks/useLogger"

export default function useSlider(length: number) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [slideIn, setSlideIn] = useState(true)

	useLogger(currentIndex, "currentIndex")

	const doesNextExist = currentIndex + 1 < length
	const doesPrevExist = currentIndex - 1 >= 0
	useLogger(doesNextExist, "doesNextExist")
	useLogger(doesPrevExist, "doesPrevExist")

	const handleArrowClick = (direction: "next" | "prev") => {
		const newIndex =
			direction === "next" ? currentIndex + 1 : currentIndex - 1

		setSlideIn(false)
		setTimeout(() => {
			setCurrentIndex(newIndex)
			setSlideIn(true)
		}, 300) // to change the delay, transition duration should be changed in slider.scss global stylesheet
	}

	return {
		slideIn,
		handleArrowClick,
		doesNextExist,
		doesPrevExist,
		index: currentIndex,
	}
}
