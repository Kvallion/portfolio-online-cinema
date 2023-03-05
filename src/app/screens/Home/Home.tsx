import { toastr } from "react-redux-toastr"
import { Button } from "@components/ui/formElements/Button"
import Heading from "@components/ui/heading/Heading"
import { useActions } from "@hooks/useActions"
import { HomeProps } from "./Home.interface"

const Home: React.FC<HomeProps> = () => {
	const { logout } = useActions()
	return (
		<>
			<Heading
				className="text-gray-300 mb-8 text-xl"
				text="Watch movies online"
			/>
			<Button onClick={() => logout()}>Logout</Button>
		</>
	)
}

export default Home
