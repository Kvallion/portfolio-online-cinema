import { ChangeEvent } from "react"
import MaterialIcon from "@components/ui/MaterialIcon"
import s from "../Search/Search.module.scss"

interface SearchFieldProps {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: React.FC<SearchFieldProps> = ({
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={s.search}>
			<MaterialIcon name="MdSearch" className={s.icon} />
			<input
				className={s.input}
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export { SearchField }
