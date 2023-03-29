import { HomePageProps } from "pages"
import { toastr } from "react-redux-toastr"

import { Gallery } from "@components/Gallery"
import { Button } from "@components/ui/formElements/Button"
import Heading from "@components/ui/heading/Heading"

import { Slider } from "@ui/Slider"
import { ISlide } from "@ui/Slider/Slider.types"
import { Subheading } from "@ui/heading/Subheading"

import { useActions } from "@hooks/useActions"

const HomeScreen: React.FC<HomePageProps> = ({
	slides,
	actors,
	trendingMovies,
}) => {
	const { logout } = useActions()
	return (
		<main>
			<Heading
				className="text-gray-300 mb-8 text-xl"
				text="Watch movies online"
			/>

			{slides.length && <Slider slides={slides} />}

			<div className="my-10">
				<Subheading text="Trending now" />
				<Gallery items={trendingMovies} variant="vertical" />
			</div>

			<div className="my-10">
				<Subheading text="Best actors" />
				<Gallery items={actors} variant="vertical" />
			</div>

			<Button onClick={() => logout()}>Logout</Button>
		</main>
	)
}

export default HomeScreen
