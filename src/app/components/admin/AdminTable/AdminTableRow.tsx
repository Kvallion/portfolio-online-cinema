import { Subheading } from "@ui/heading/Subheading"
import { AdminActions } from "./AdminActions"
import s from "./AdminTable.module.scss"
import { AdminTableRowProps } from "./AdminTable.type"

const AdminTableRow: React.FC<AdminTableRowProps> = ({
	removeHandler,
	row: { cells, editUrl },
}) => {
	return (
		<tr className={s.row}>
			{cells.map((value) => (
				<td key={value}>{value}</td>
			))}
			<AdminActions editUrl={editUrl} removeHandler={removeHandler} />
		</tr>
	)
}

export { AdminTableRow }
