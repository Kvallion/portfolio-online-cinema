export interface TableItem {
	_id: string
	editUrl: string
	items: string[]
}

export interface AdminTableItemProps {
	tableItem: TableItem
	removeHandler: (id: string) => void
}
