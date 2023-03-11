import cn from "clsx"
import s from "../AdminTable.module.scss"

type AdminTableHeaderProps = {
	columnNames: string[]
}

const AdminTableHeader: React.FC<AdminTableHeaderProps> = ({ columnNames }) => {
	return (
		<thead className="block">
			<tr className={cn(s.row, s.header_row)}>
				{columnNames.map((name) => (
					<th key={name}>{name}</th>
				))}
				<th>Actions</th>
			</tr>
		</thead>
	)
}

export { AdminTableHeader }
