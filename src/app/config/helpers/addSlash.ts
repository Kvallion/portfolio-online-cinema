export function addSlash(path: string) {
	if (!path) return path
	if (path[0] === "/") return path
	return "/" + path
}
