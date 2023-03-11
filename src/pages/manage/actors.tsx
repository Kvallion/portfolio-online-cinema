import ActorListScreen from "@screens/admin/actors/ActorListScreen"
import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const ActorListPage: NextPageAuth = () => {
	return (
		<Meta title="Admin panel | movies">
			<ActorListScreen />
		</Meta>
	)
}

ActorListPage.onlyAdmin = true

export default ActorListPage
