import { GalleryItem } from "@components/Gallery/GalleryItem"

import { Description } from "@ui/heading/Description"
import Heading from "@ui/heading/Heading"

import { Movie } from "@shared/types/movie.types"

import movie2GalleryItem from "@utils/transformData/movie2GalleryItem"

import s from "./Catalog.module.scss"

type CatalogScreenProps = {
	title: string
	description?: string
	movies: Movie[]
}

const CatalogScreen: React.FC<CatalogScreenProps> = ({
	title,
	description,
	movies,
}) => {
	return (
		<main>
			<Heading text={title} className={s.heading} />

			{description && (
				<Description text={description} className={s.description} />
			)}

			<section className={s.movies}>
				{movies.map((m) => (
					<GalleryItem
						key={m._id}
						item={movie2GalleryItem(m)}
						variant="horizontal"
						className={s.link}
					/>
				))}
			</section>
		</main>
	)
}

export { CatalogScreen }
