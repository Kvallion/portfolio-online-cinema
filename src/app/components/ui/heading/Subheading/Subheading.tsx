import cn from "clsx"

interface SubheadingProps {
	text: string
	className?: string
}

const Subheading: React.FC<SubheadingProps> = ({ text, className }) => {
	return (
		<h4 className={cn("text-white text-xl mb-5 font-semibold", className)}>
			{text}
		</h4>
	)
}

export { Subheading }
