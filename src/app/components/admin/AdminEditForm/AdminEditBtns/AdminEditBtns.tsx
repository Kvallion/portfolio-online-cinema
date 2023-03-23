import { useRouter } from "next/router"

import { Button } from "@ui/formElements/Button"

import s from "./AdminEditBtns.module.scss"

type AdminEditBtnsProps = {}

const AdminEditBtns: React.FC<AdminEditBtnsProps> = ({}) => {
	const { back } = useRouter()
	return (
		<div className="flex gap-2">
			<Button type="submit">Save</Button>
			<Button type="button" variant="secondary" onClick={back}>
				Back
			</Button>
		</div>
	)
}

export { AdminEditBtns }
