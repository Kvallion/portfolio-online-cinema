import cn from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import SkeletonLoader from "@ui/SkeletonLoader"
import { Subheading } from "@ui/heading/Subheading"
import { MovieService } from "@services/movie.service"
import { getMovieUrl } from "@config/helpers/paths/singleEntity"
import s from "../Statistics.module.scss"

const PopularMovie: React.FC = () => {
	const { isLoading, data: movie } = useQuery(
		"Most popular movie in admin",
		() => MovieService.getMostPopularMovies(),
		{ select: (data) => data[0] }
	)

	return (
		<div className={cn(s.block, s.popular)}>
			<Subheading
				className={s.subheading}
				text="The most popular movie"
			/>
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h5 className={s.opened_count}>
							Opened {movie.countOpened} times
						</h5>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								width={285}
								height={176}
								src={movie.bigPoster}
								alt={movie.title + "poster"}
								className={s.poster}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export { PopularMovie }
