import { Menu } from "@components/layout/Navigation/components/Menu"

import { usePopularGenres } from "./usePopularGenres"

interface GenreMenuProps {}

const GenreMenu: React.FC<GenreMenuProps> = () => {
	const { isLoading, data } = usePopularGenres()
	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu title="popular genres" items={data || []} />
	)
}

export { GenreMenu }
