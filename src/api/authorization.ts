import axios from 'axios'

export const api = axios.create({
	baseURL: `${import.meta.env.VITE_SERVICE_URL}`
})

api.interceptors.request.use(
	async config => {

		const token = localStorage.getItem('accessToken')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token} `;
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)

api.interceptors.request.use(
	config => {
		return config
	},
)

api.interceptors.response.use((response)=>{
	return response;
},async error => {
	const originalRequest = error.config
	const refreshToken = localStorage.getItem('refreshToken')
	if (
		error.response.status === 401 &&
		error.config &&
		!error.config._isRetry
	) {
		originalRequest._isRetry = true
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_SERVICE_URL}auth/refresh`,
				{
					refresh_token: refreshToken
				}
			)
			localStorage.setItem('accessToken', response.data.access_token)
			localStorage.setItem('refreshToken', response.data.refresh_token)
			return api.request(originalRequest)
		} catch (e) {
			console.log(e)
		}
	}
	throw error
})

export default api
