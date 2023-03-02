import axios from "axios"

import { API_URL } from "@config/api.config"

export const axiosPublic = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
})
