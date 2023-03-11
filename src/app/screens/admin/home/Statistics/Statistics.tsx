import { CountUsers } from "./CountUsers"
import { PopularMovie } from "./PopularMovie"
import s from "./Statistics.module.scss"

const Statistics: React.FC = () => {
	return (
		<section className={s.statistics}>
			<CountUsers />
			<PopularMovie />
		</section>
	)
}

export { Statistics }
