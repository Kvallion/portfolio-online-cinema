import cn from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"

import { useLogger } from "@hooks/useLogger"

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

	useLogger(bigPoster, "bigPoster")
	const objectPosition = bigPoster.split(".")[0].split("-").at(-1)

	return (
		<div className={s.slide}>
			{bigPoster && (
				<Image
					src={bigPoster}
					alt={title + "movie"}
					fill
					className={cn(s.image, {
						[s.top]: objectPosition === "top",
						[s.bottom]: objectPosition === "bottom",
					})}
					draggable={false}
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
