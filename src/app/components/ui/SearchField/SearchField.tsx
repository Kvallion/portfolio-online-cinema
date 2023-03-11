import { ChangeEvent } from "react"
import MaterialIcon from "@components/ui/MaterialIcon"
import s from "./SearchField.module.scss"

type SearchFieldProps = {
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
