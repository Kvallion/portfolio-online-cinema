import Image from "next/image"
import Link from "next/link"
import s from "./SearchPopupVariant.module.scss"

type SearchPopupVariantProps = {
	title: string
	link: string
	img: string
}

const SearchPopupVariant: React.FC<SearchPopupVariantProps> = ({
	link,
	title,
	img,
}) => {
	return (
		<Link href={link} className={s.link}>
			<div className={s.card}>
				<Image
					src={img}
					alt={title + "image"}
					className={s.img}
					width={50}
					height={50}
					draggable={false}
				/>
				<span className={s.text}>{title}</span>
			</div>
		</Link>
	)
}

export { SearchPopupVariant }
