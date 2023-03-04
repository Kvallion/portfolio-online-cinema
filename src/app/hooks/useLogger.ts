import { useEffect } from "react"

export function useLogger(value: any, name?: string) {
	useEffect(() => {
		console.log(name || "value", value)
	}, [value])
}
