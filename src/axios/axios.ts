import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:5000'
})

api.interceptors.request.use(
	function (config) {
		console.log('Request sent:', config)
		return config
	},
	function (error) {
		console.error('Request error:', error)
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	function (response) {
		console.log('Response received:', response)
		return response
	},
	function (error) {
		console.error('Response error:', error)
		return Promise.reject(error)
	}
)

export default api
