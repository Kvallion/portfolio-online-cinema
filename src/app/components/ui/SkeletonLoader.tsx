import cn from "clsx"
import Skeleton, { SkeletonProps } from "react-loading-skeleton"

import "react-loading-skeleton/dist/skeleton.css"

const SkeletonLoader: React.FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor="#1f2125"
			highlightColor="#292a2e"
			className={cn("rounded-lg", className)}
		/>
	)
}

export default SkeletonLoader