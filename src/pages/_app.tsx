import MainProvider from "app/providers/MainProvider"
import type { AppProps } from "next/app"

import { Layout } from "@components/layout"

import "@styles/globals.scss"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MainProvider>
	)
}
