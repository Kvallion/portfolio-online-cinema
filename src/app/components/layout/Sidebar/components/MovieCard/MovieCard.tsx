import Image from "next/image"
import Link from "next/link"
import MaterialIcon from "@components/ui/MaterialIcon"
import { Movie } from "@shared/types/movie.types"
import { getGenreUrl, getMovieUrl } from "@config/helpers/paths/singleEntity"
import s from "./MovieCard.module.scss"

interface MovieCardProps
	extends Pick<Movie, "title" | "poster" | "slug" | "genres" | "rating"> {}

const MovieCard: React.FC<MovieCardProps> = ({
	title,
	genres,
	poster,
	slug,
	rating,
}) => {
	return (
		<li className={s.card}>
			<Link href={getMovieUrl(slug)}>
				<Image
					className={s.poster}
					src={poster}
					alt={title + "poster"}
					priority
					width={65}
					height={97}
					draggable={false}
				/>
			</Link>
			<div className={s.info}>
				<h4 className={s.title}>{title}</h4>
				<span className={s.genres}>
					{genres.map(({ _id, name, slug }, i) => (
						<Link key={_id} href={getGenreUrl(slug)}>
							{name} {i + 1 === genres.length ? ", " : ""}
						</Link>
					))}
				</span>

				<div className={s.rating}>
					<MaterialIcon name="MdStarRate" className={s.star} />
					<span>{rating.toFixed(1)}</span>
				</div>
			</div>
		</li>
	)
}

export { MovieCard }
