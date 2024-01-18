import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/authorization'
import { IUser } from '../../types/userType'

export const loginAction = createAsyncThunk(
	'login',
	async ({ email, password }: IUser) => {
		try {
			const response = await api.post('/auth/login', {
				email,
				password
			})
			localStorage.setItem('accessToken', response.data.token.access_token)
			localStorage.setItem('refreshToken', response.data.token.refresh_token)
			return response.data.token.access_token
		} catch (error) {
			console.error('Error fetching registration:', error)
			throw error
		}
	}
)
