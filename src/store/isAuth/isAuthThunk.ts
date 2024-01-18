import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/authorization'

export const isAuthAction = createAsyncThunk('refresh', async () => {
	try {
		const response = await api.post('http://localhost:5000/auth/refresh', {
			refresh_token: localStorage.getItem('refreshToken')
		})
		localStorage.setItem('accessToken', response.data.token.access_token)
		localStorage.setItem('refreshToken', response.data.token.refresh_token)
		return response.data.token.access_token
	} catch (error) {
		console.error('Error fetching registration:', error)
		throw error
	}
})
