import { SearchPopupVariant } from "@components/layout/Sidebar/components/SearchPopupVariant"
import { Movie } from "@shared/types/movie.types"
import s from "../Search/Search.module.scss"

interface SearchPopupListProps {
	movies: Movie[]
}

const SearchPopupList: React.FC<SearchPopupListProps> = ({ movies }) => {
	return (
		<ul className={s.list}>
			{movies.length ? (
				movies.map(({ _id, title, slug, poster }) => (
					<SearchPopupVariant
						key={_id}
						title={title}
						link={slug}
						img={poster}
					/>
				))
			) : (
				<div className={s.empty_list}>Movies not found</div>
			)}
		</ul>
	)
}

export { SearchPopupList }
