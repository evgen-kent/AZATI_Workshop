import axios from 'axios'

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_SERVICE_URL}`
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
api.interceptors.response.use(
	response => response,
	error => {
		if (error.response.status === 401) {
			//здесь нужно перенаправить на 401 страницу (когда сделайте её , то сюда не забудь)
		}
		return Promise.reject(error)
	}
)

export default api
