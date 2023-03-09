import cn from "clsx"
import { useQuery } from "react-query"
import SkeletonLoader from "@ui/SkeletonLoader"
import { AdminService } from "@services/admin.service"
import s from "../Statistics.module.scss"

const CountUsers: React.FC = () => {
	const { isLoading, data: count } = useQuery("Count users", () =>
		AdminService.getUsersCount()
	)

	return (
		<div className={cn(s.block, s.user_count)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<>
						<div className={s.count}>{count ?? ""}</div>
						<span className={s.description}>users</span>
					</>
				)}
			</div>
		</div>
	)
}

export { CountUsers }
