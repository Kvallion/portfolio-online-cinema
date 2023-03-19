import ActorEditScreen from "@screens/admin/actors/ActorEditScreen"

import Meta from "@components/meta/Meta"

import { NextPageAuth } from "@shared/types/roles.types"

const ActorEditPage: NextPageAuth = () => {
	return (
		<Meta title="Edit actor | Admin panel">
			<ActorEditScreen />
		</Meta>
	)
}

ActorEditPage.onlyAdmin = true

export default ActorEditPage
