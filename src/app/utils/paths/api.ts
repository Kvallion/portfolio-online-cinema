import { addSlash } from "@utils/helpers/addSlash"

export const getGenresUrl = (path: string = "") => `/genres${addSlash(path)}`
export const getAuthUrl = (path: string = "") => `/auth${addSlash(path)}`
export const getActorsUrl = (path: string = "") => `/actors${addSlash(path)}`
export const getUsersUrl = (path: string = "") => `/users${addSlash(path)}`
export const getRatingsUrl = (path: string = "") => `/ratings${addSlash(path)}`

export const getAdminUrl = (path: string) => `/manage${addSlash(path)}`
export const adminHomeUrl = "/manage"
