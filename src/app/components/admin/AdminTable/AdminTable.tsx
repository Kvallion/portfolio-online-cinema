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
		<>
			<table className="block">
				<AdminTableHeader columnNames={headerItems} />

				{!isLoading &&
					(rows.length ? (
						<tbody className="block">
							{rows.map((row) => (
								<AdminTableRow
									key={row._id}
									removeHandler={() => removeHandler(row._id)}
									row={row}
								/>
							))}
						</tbody>
					) : (
						<tbody className={s.not_found}>
							Elements not found{" "}
						</tbody>
					))}
			</table>
			{isLoading && (
				<SkeletonLoader count={4} height={48} className="mt-4" />
			)}
		</>
	)
}

export { AdminTable }
