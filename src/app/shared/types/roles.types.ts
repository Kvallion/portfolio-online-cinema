import { NextPage } from "next"

export interface RoleAccessConfig {
	onlyAdmin?: boolean
	onlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage & RoleAccessConfig

export type HasRoleConfig = { roleConfig: RoleAccessConfig }
