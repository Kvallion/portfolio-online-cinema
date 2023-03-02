import { Inter } from "next/font/google"

import { Home } from "@screens/Home"

const inter = Inter({ subsets: ["latin"] })

export default function HomePage() {
	return (
		<>
			<Home />
		</>
	)
}
