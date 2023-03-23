import Image from "next/image"
import { useRouter } from "next/router"

import { ISlide } from "../Slider.types"
import s from "./Slide.module.scss"

type SlideProps = {
	slide: ISlide
	buttonTitle?: string
}

const Slide: React.FC<SlideProps> = ({
	slide: { bigPoster, title, subtitle, link },
	buttonTitle,
}) => {
	const { push } = useRouter()

	return (
		<div className={s.slide}>
			{bigPoster && (
				<Image
					src={bigPoster}
					alt={title + "movie"}
					fill
					className={s.image}
					draggable={false}
					unoptimized
					priority
				/>
			)}

			<div className={s.content}>
				<div className={s.heading}>{title}</div>
				<div className={s.subheading}>{subtitle}</div>
			</div>

			<button className={s.button} onClick={() => push(link)}>
				{buttonTitle}
			</button>
		</div>
	)
}

export { Slide }
