export interface AdminTableRow {
	_id: string
	editUrl: string
	cells: string[]
}

export type AdminTableRowProps = {
	row: AdminTableRow
	removeHandler: (id: string) => void
}
