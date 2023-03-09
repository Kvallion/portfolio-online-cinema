import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const UserListPage: NextPageAuth = () => {
	return <Meta title="Admin panel | users">UserListPage</Meta>
}

UserListPage.onlyAdmin = true

export default UserListPage
