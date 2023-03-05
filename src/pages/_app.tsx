import MainProvider from "app/providers/MainProvider"
import type { AppProps } from "next/app"
import { Layout } from "@components/layout"
import { RoleAccessConfig } from "@shared/types/roles.types"
import "@styles/globals.scss"

interface AppPropsRoleExtension {
	Component: {
		onlyUser?: boolean
		onlyAdmin?: boolean
	}
}

export default function App({
	Component,
	pageProps,
}: AppProps & AppPropsRoleExtension) {
	const { onlyAdmin, onlyUser } = Component
	const roleConfig: RoleAccessConfig = { onlyAdmin, onlyUser }

	return (
		<MainProvider roleConfig={roleConfig}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MainProvider>
	)
}
