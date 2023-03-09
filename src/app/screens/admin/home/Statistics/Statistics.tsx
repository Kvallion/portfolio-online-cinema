import { CountUsers } from "./CountUsers"
import { PopularMovie } from "./PopularMovie"
import s from "./Statistics.module.scss"

interface StatisticsProps {}

const Statistics: React.FC<StatisticsProps> = () => {
	return (
		<section className={s.statistics}>
			<CountUsers />
			<PopularMovie />
		</section>
	)
}

export { Statistics }
