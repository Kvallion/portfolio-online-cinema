import { Inter } from "next/font/google"

import { Home } from "@screens/Home"

import Meta from "@components/meta/Meta"

const inter = Inter({ subsets: ["latin"] })

export default function HomePage() {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies and TV shows online or stream right to your browser"
		>
			<Home />
		</Meta>
	)
}
