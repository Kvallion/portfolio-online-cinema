import cn from "clsx"
import s from "../AdminTable.module.scss"

interface AdminTableHeaderProps {
	columnNames: string[]
}

const AdminTableHeader: React.FC<AdminTableHeaderProps> = ({ columnNames }) => {
	return (
		<div className={cn(s.item, s.item_header)}>
			{columnNames.map((name) => (
				<div key={name}>{name}</div>
			))}
			<div>Actions</div>
		</div>
	)
}

export { AdminTableHeader }
