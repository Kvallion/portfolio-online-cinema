import { useQuery } from "react-query"

import { MenuItemProps } from "@components/layout/Navigation/components/MenuItem"

import { genreService } from "@services/genre.service"

import { getGenreUrl } from "@config/helpers/paths/singleEntity"

export function usePopularGenres(limit: number = 4) {
	const queryData = useQuery(
		"popular genre menu",
		() => genreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						({ icon, name, slug }) =>
							({
								icon,
								title: name,
								link: getGenreUrl(slug),
							} as MenuItemProps)
					)
					.slice(0, limit),
		}
	)
	return queryData
}
