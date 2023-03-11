import { useRouter } from "next/router"
import MaterialIcon from "@ui/MaterialIcon"
import s from "./AdminActions.module.scss"

type AdminActionsProps = {
	editUrl: string
	removeHandler: (...args: any[]) => void
}

const AdminActions: React.FC<AdminActionsProps> = ({
	editUrl,
	removeHandler,
}) => {
	const { push } = useRouter()
	return (
		<td className={s.acitons}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdDelete" />
			</button>
		</td>
	)
}

export { AdminActions }
