export type GalleryItem = {
	posterPath: string
	name: string
	link: string
	content?: {
		title: string
		subtitle?: string
	}
}

export type GalleryItemProps = {
	item: GalleryItem
	variant: "vertical" | "horizontal"
}
