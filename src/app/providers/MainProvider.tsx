import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import { store } from "@store/store"
import HeadProvider from "./HeadProvider/HeadProvider"
import ReduxToast from "./ReduxToast"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					{children}
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
