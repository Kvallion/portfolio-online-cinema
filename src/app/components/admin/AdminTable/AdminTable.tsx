import SkeletonLoader from "@ui/SkeletonLoader"
import { TableItem } from "./AdminTable.interface"
import s from "./AdminTable.module.scss"
import { AdminTableHeader } from "./AdminTableHeader"
import { AdminTableItem } from "./AdminTableItem"

interface AdminTableProps {
	tableItems: TableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: React.FC<AdminTableProps> = ({
	tableItems,
	headerItems,
	isLoading,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader columnNames={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((item) => (
					<AdminTableItem
						key={item._id}
						removeHandler={() => removeHandler(item._id)}
						tableItem={item}
					/>
				))
			) : (
				<div className={s.not_found}>Elements not found </div>
			)}
		</div>
	)
}

export { AdminTable }
