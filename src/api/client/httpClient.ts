import axios, { type CreateAxiosDefaults } from 'axios'
import setAuthHeader from '@/api/client/interceptors/setAuthHeader'

const createHttpClient = (config: CreateAxiosDefaults) => {
	const httpClient = axios.create(config)

	httpClient.interceptors.request.use(
		function (config) {
			setAuthHeader(config)
			return config
		},
		function (error) {
			return Promise.reject(error)
		},
	)

	httpClient.interceptors.response.use(
		function (response) {
			return response.data
		},
		function (error) {
			return Promise.reject(error)
		},
	)

	return httpClient
}

export const httpClient = createHttpClient({
	baseURL: import.meta.env.VITE_API_URL,
})
