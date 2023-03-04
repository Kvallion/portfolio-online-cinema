import { NextPage } from "next"
import { Auth } from "@screens/Auth"
import Meta from "@components/meta/Meta"

const AuthPage: NextPage = () => {
	return (
		<Meta title="Authorization" description="Authorization page">
			<Auth />
		</Meta>
	)
}

export default AuthPage
