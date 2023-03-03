import { SearchField } from "@components/layout/Sidebar/components/SearchField"
import { SearchPopupList } from "@components/layout/Sidebar/components/SearchPopupList"
import s from "./Search.module.scss"
import { useSearch } from "./useSearch"

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
	const { isSuccess, debouncedSearch, handleSearch, data } = useSearch()
	return (
		<div className={s.wrapper}>
			<SearchField
				searchTerm={debouncedSearch}
				handleSearch={handleSearch}
			/>
			{isSuccess && <SearchPopupList movies={data || []} />}
		</div>
	)
}

export { Search }
