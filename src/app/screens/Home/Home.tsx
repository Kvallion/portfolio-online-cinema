import Heading from "@components/ui/heading/Heading"

import { HomeProps } from "./Home.interface"

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<Heading
				className="text-gray-300 mb-8 text-xl"
				text="Watch movies online"
			/>
		</>
	)
}

export default Home
