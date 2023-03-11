import Heading from "@ui/heading/Heading"
import { Statistics } from "./Statistics"

const Admin: React.FC = () => {
	return (
		<main>
			<Heading text="Some statistics" />
			<Statistics />
		</main>
	)
}

export { Admin }
