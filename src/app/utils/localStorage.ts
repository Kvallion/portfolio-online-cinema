export function getStoreLocal(name: string) {
	if (typeof localStorage !== "undefined") {
		const result = localStorage.getItem(name)
		return result ? JSON.parse(result) : null
	}
	return null
}
