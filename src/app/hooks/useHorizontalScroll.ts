import { useEffect, useRef } from "react"

export default function useHorizontalScroll() {
	const elRef = useRef<any>(null)
	useEffect(() => {
		const el = elRef.current
		if (el) {
			const onWheel = (e: WheelEvent) => {
				if (e.deltaY == 0) return
				if (el.scrollWidth === el.clientWidth) return

				e.preventDefault()
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: "smooth",
				})
			}
			el.addEventListener("wheel", onWheel)

			return () => el.removeEventListener("wheel", onWheel)
		}
	}, [])

	return elRef
}
