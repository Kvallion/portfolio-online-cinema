import { ChangeEvent } from "react"
import { SearchField } from "@ui/SearchField"
import { AdminCreateButton } from "./AdminCreateButton"
import s from "./AdminHeader.module.scss"

interface AdminHeaderProps {
	onClick?: () => void
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
	onClick,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={s.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export { AdminHeader }
