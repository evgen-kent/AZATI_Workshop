import axios from 'axios'

export const apiNonAuth = axios.create({
	baseURL: 'http://localhost:5000'
})
