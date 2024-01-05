import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:5000'
})

axios.interceptors.request.use(
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
axios.interceptors.request.use(
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
