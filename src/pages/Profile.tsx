import { NextPageAuth } from "@shared/types/roles.types"

const ProfilePage: NextPageAuth = () => {
	return <div>ProfilePage</div>
}

ProfilePage.onlyUser = true

export default ProfilePage
