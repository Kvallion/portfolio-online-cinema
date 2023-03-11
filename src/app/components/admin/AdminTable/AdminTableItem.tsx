import { Subheading } from "@ui/heading/Subheading"
import { AdminActions } from "./AdminActions"
import { AdminTableItemProps } from "./AdminTable.interface"
import s from "./AdminTable.module.scss"

const AdminTableItem: React.FC<AdminTableItemProps> = ({
	removeHandler,
	tableItem: { items, editUrl },
}) => {
	return (
		<div className={s.item}>
			{items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions editUrl={editUrl} removeHandler={removeHandler} />
		</div>
	)
}

export { AdminTableItem }
