import cn from "clsx"

interface HeadingProps {
	text: string
	className?: string
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
	const style = `text-white text-opacity-80 font-semibold ${
		className?.includes("xl") ? "" : "text-3xl"
	}`
	return <h1 className={cn(style, className)}>{text}</h1>
}

export default Heading
