import { useRef } from "react"

import useHorizontalScroll from "@hooks/useHorizontalScroll"

import s from "./Gallery.module.scss"
import { GalleryVariant, IGalleryItem } from "./Gallery.types"
import { GalleryItem } from "./GalleryItem"

type GalleryProps = {
	items: IGalleryItem[]
	variant: GalleryVariant
}

const Gallery: React.FC<GalleryProps> = ({ items, variant }) => {
	const gallery = useHorizontalScroll()

	return (
		<div
			ref={gallery}
			className={s.gallery}
			onWheel={(e) => {
				gallery.current!.scrollLeft += e.deltaY
				e.deltaY = 0
			}}
		>
			{items.map((item) => (
				<GalleryItem key={item.link} item={item} variant={variant} />
			))}
		</div>
	)
}

export { Gallery }
