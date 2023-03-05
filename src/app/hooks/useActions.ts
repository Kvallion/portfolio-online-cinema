import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { allActions } from "@store/rootActions"
import { useAppDispatch } from "./redux"

export function useActions() {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
