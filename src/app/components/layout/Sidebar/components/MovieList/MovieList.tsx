import Link from "next/link"
import { Button } from "@ui/formElements/Button"
import { Movie } from "@shared/types/movie.types"
import { MovieCard } from "../MovieCard"
import s from "./MovieList.module.scss"

type MovieListProps = {
	title: string
	link: string
	movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ title, link, movies }) => {
	return (
		<div className={s.root}>
			<h3 className={s.heading}>{title}</h3>
			<ul>
				{movies.map(({ _id, title, genres, poster, slug, rating }) => (
					<MovieCard
						key={_id}
						title={title}
						genres={genres}
						slug={slug}
						poster={poster}
						rating={rating}
					/>
				))}
			</ul>
			<Link href={link}>
				<Button className={s.button}>See more</Button>
			</Link>
		</div>
	)
}

export { MovieList }
