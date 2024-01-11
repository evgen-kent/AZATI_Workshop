import axios from 'axios'

export const apiNonAuth = axios.create({
	baseURL: `${process.env.SERVICE_URL}`
})
