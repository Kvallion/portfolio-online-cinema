import { toastr } from "react-redux-toastr"
import Heading from "@components/ui/heading/Heading"
import { HomeProps } from "./Home.interface"

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Heading
				className="text-gray-300 mb-8 text-xl"
				text="Watch movies online"
			/>
			<button
				onClick={() =>
					toastr.success("Auth", "You have successfully authorized!")
				}
			>
				Show message
			</button>
		</>
	)
}

export default Home
