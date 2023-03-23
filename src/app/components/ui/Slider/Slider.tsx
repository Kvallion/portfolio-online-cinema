import { CSSTransition } from "react-transition-group"

import { Slide } from "./Slide/Slide"
import s from "./Slider.module.scss"
import { ISlide } from "./Slider.types"
import { SliderArrow } from "./SliderArrow"
import useSlider from "./useSlider"

type SliderProps = {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: React.FC<SliderProps> = ({ slides, buttonTitle }) => {
	const { doesNextExist, doesPrevExist, handleArrowClick, index, slideIn } =
		useSlider(slides.length)

	return (
		<div className={s.slider}>
			<CSSTransition
				in={slideIn}
				classNames="slide-animation"
				timeout={300}
			>
				<Slide slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			<SliderArrow
				direction="left"
				disabled={!doesPrevExist}
				clickHandler={() => handleArrowClick("prev")}
			/>

			<SliderArrow
				direction="right"
				disabled={!doesNextExist}
				clickHandler={() => handleArrowClick("next")}
			/>
		</div>
	)
}

export { Slider }
