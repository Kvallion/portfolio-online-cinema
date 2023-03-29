import cn from "clsx"
import Image from "next/image"
import Link from "next/link"

import { GalleryItemProps } from "@components/Gallery/Gallery.types"
import { item } from "@components/layout/Navigation/components/MenuItem/MenuItem.module.scss"

import s from "./GalleryItem.module.scss"

const GalleryItem: React.FC<GalleryItemProps> = ({
	item: { link, name, verticalImg, horizontalImg, content },
	variant,
	className,
}) => {
	return (
		<Link
			href={link}
			className={cn(s.item, className, {
				[s.with_text]: content,
				[s.horizontal]: variant === "horizontal",
				[s.vertical]: variant === "vertical",
			})}
		>
			<Image
				fill
				src={
					variant === "horizontal"
						? horizontalImg || verticalImg
						: verticalImg
				}
				alt={name}
				className={s.image}
				draggable={false}
				priority
			/>
			{content && (
				<div className={s.content}>
					<h6 className={s.title}>{content.title}</h6>
					{content.subtitle && (
						<span className={s.subtitle}>{content.subtitle}</span>
					)}
				</div>
			)}
		</Link>
	)
}

export { GalleryItem }
