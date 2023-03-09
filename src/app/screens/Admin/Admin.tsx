import Heading from "@ui/heading/Heading"
import { Statistics } from "./Statistics"

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
	return (
		<main>
			<Heading text="Some statistics" />
			<Statistics />
		</main>
	)
}

export { Admin }
