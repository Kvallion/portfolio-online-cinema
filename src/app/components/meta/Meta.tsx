import Head from "next/head"
import { useRouter } from "next/router"

import { clearText } from "@utils/string/clearText"

import { mergeTitle } from "@config/helpers/seo.helpers"
import { siteName } from "@config/seo.config"

import logoImage from "@assets/images/logo.svg"

interface MetaProps {
	title: string
	description?: string
	image?: string
	children?: React.ReactNode
}

const Meta: React.FC<MetaProps> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	title = mergeTitle(title)
	return (
		<>
			<Head>
				<title itemProp="headline">{title}</title>
				{description ? (
					<>
						<meta
							name="description"
							itemProp="description"
							content={clearText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locate" content="en" />
						<meta property="og:title" content={title} />
						<meta property="og:url" content={currentUrl} />
						<meta
							property="og:image"
							content={image || logoImage}
						/>
						<meta property="og:site_name" content={siteName} />
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
