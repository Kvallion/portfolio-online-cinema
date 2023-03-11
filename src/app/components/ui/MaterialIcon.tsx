import * as MaterialIcons from "react-icons/md"
import { MaterialIconName } from "@shared/types/icons.types"

type MaterialIconProps = {
	name: MaterialIconName
	className?: string
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ name, className }) => {
	const IconComponent = MaterialIcons[name]

	return (
		<IconComponent className={className} /> || (
			<MaterialIcons.MdDragIndicator className={className} />
		)
	)
}

export default MaterialIcon
