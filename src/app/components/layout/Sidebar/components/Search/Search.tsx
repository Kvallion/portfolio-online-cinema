import { SearchPopupList } from "@components/layout/Sidebar/components/SearchPopupList"
import { SearchField } from "@ui/SearchField"
import s from "./Search.module.scss"
import { useSearch } from "./useSearch"

type SearchProps = {}

const Search: React.FC<SearchProps> = () => {
	const { isSuccess, searchTerm, handleSearch, data } = useSearch()
	return (
		<section className={s.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchPopupList movies={data || []} />}
		</section>
	)
}

export { Search }
