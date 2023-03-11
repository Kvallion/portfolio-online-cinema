import { Button } from "@ui/formElements/Button"

type AdminCreateButtonProps = {
	onClick: () => void
}

const AdminCreateButton: React.FC<AdminCreateButtonProps> = ({ onClick }) => {
	return <Button onClick={onClick}>Create new</Button>
}

export { AdminCreateButton }
