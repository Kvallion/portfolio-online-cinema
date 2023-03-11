import SkeletonLoader from "@ui/SkeletonLoader"
import s from "./AdminTable.module.scss"
import { AdminTableRow as IAdminTableRow } from "./AdminTable.type"
import { AdminTableHeader } from "./AdminTableHeader"
import { AdminTableRow } from "./AdminTableRow"

type AdminTableProps = {
	rows: IAdminTableRow[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: React.FC<AdminTableProps> = ({
	rows,
	headerItems,
	isLoading,
	removeHandler,
}) => {
	return (
		<table className="block">
			<AdminTableHeader columnNames={headerItems} />
			<tbody className="block">
				{isLoading ? (
					<SkeletonLoader count={1} height={48} className="mt-4" />
				) : rows.length ? (
					rows.map((row) => (
						<AdminTableRow
							key={row._id}
							removeHandler={() => removeHandler(row._id)}
							row={row}
						/>
					))
				) : (
					<div className={s.not_found}>Elements not found </div>
				)}
			</tbody>
		</table>
	)
}

export { AdminTable }
