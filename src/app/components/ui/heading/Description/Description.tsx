import cn from "clsx"
import parse from "html-react-parser"

import s from "./Description.module.scss"

type DescriptionProps = {
	text: string
	className?: string
}

const Description: React.FC<DescriptionProps> = ({ text, className }) => {
	return <div className={cn(s.description, className)}>{parse(text)}</div>
}

export { Description }
