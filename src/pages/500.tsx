import { NextPage } from "next"
import Meta from "@components/meta/Meta"
import Heading from "@components/ui/heading/Heading"

const Error500: NextPage = () => {
	return (
		<Meta title="500 - Server-side error">
			<Heading text="500 - Server-side error occurred" />
		</Meta>
	)
}

export default Error500
