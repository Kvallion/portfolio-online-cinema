import Image from "next/image"
import Link from "next/link"

import logoImg from "@assets/images/logo.svg"

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				src={logoImg}
				alt="Logo of Online cinema"
				width={247}
				height={34}
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
