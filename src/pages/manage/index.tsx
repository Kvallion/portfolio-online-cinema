import { NextPageAuth } from "@shared/types/roles.types"

const AdminPage: NextPageAuth = () => {
	return <div>AdminPage</div>
}

AdminPage.onlyAdmin = true

export default AdminPage
