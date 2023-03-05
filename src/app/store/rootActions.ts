import * as asyncUserActions from "./user/user.actions"
import { userActions } from "./user/user.slice"

export const allActions = {
	...userActions,
	...asyncUserActions,
}
