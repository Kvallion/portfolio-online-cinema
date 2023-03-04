import { NextPage } from "next"
import Meta from "@components/meta/Meta"
import Heading from "@components/ui/heading/Heading"

const Error404: NextPage = () => {
	return (
		<Meta title="404 - Page Not Found">
			<Heading text="404 - Page Not Found" />
		</Meta>
	)
}

export default Error404
