import { Admin } from "@screens/Admin"
import Meta from "@components/meta/Meta"
import { NextPageAuth } from "@shared/types/roles.types"

const AdminPage: NextPageAuth = () => {
	return (
		<Meta title="Admin panel">
			<Admin />
		</Meta>
	)
}

AdminPage.onlyAdmin = true

export default AdminPage
