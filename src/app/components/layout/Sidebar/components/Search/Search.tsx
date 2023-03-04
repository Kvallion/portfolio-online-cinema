import { SearchField } from "@components/layout/Sidebar/components/SearchField"
import { SearchPopupList } from "@components/layout/Sidebar/components/SearchPopupList"
import s from "./Search.module.scss"
import { useSearch } from "./useSearch"

interface SearchProps {}

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