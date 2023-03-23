import * as MaterialIcons from "react-icons/md"

import useClientCheck from "@hooks/useClientCheck"

import { MaterialIconName } from "@shared/types/icons.types"

type MaterialIconProps = {
	name: MaterialIconName
	className?: string
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ name, className }) => {
	const { isClient } = useClientCheck()

	const IconComponent = MaterialIcons[name]

	if (isClient) {
		return (
			<IconComponent className={className} /> || (
				<MaterialIcons.MdDragIndicator className={className} />
			)
		)
	} else {
		return null
	}
}

export default MaterialIcon
