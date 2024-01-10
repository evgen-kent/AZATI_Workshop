import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/autorization'
import { IUser } from '../../types/userType'

export const loginAction = createAsyncThunk(
	'registration',
	async ({ username, password }: IUser) => {
		try {
			const response = await api.post('/auth/login', {
				username,
				password
			})
			localStorage.setItem('accessToken', response.data.access_token)
			return response.data.access_token
		} catch (error) {
			console.error('Error fetching registration:', error)
			throw error
		}
	}
)
