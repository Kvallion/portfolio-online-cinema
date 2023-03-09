import { useRouter } from "next/router"
import MaterialIcon from "@ui/MaterialIcon"
import s from "./AdminActions.module.scss"

interface AdminActionsProps {
	editUrl: string
	removeHandler: (...args: any[]) => void
}

const AdminActions: React.FC<AdminActionsProps> = ({
	editUrl,
	removeHandler,
}) => {
	const { push } = useRouter()
	return (
		<div className={s.acitons}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdDelete" />
			</button>
		</div>
	)
}

export { AdminActions }
