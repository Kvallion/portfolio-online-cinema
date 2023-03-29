export interface IGalleryItem {
	verticalImg: string
	horizontalImg?: string
	name: string
	link: string
	content?: {
		title: string
		subtitle?: string
	}
}

export type GalleryVariant = "vertical" | "horizontal"

export type GalleryItemProps = {
	item: IGalleryItem
	variant: GalleryVariant
	className?: string
}
