import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { HasChildren } from "@shared/types/components.utility.types"
import { HasRoleConfig, RoleAccessConfig } from "@shared/types/roles.types"
import { store } from "@store/store"
import AuthProvider from "./AuthProvider/AuthProvider"
import HeadProvider from "./HeadProvider/HeadProvider"
import ReduxToast from "./ReduxToast"

interface MainProviderProps extends HasRoleConfig, HasChildren {}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: React.FC<MainProviderProps> = ({
	children,
	roleConfig,
}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider roleConfig={roleConfig}>
						{children}
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
