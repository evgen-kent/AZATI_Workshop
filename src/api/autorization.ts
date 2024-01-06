import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:5000'
})

api.interceptors.request.use(
	async config => {
		const token = localStorage.getItem('accessToken')
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)

export default api
