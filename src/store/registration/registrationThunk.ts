import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/autorization'
import { IUser } from '../../types/userType'

export const registrationAction = createAsyncThunk(
	'registration',
	async ({ username, password }: IUser) => {
		try {
			const response = await api.post('/auth/registration', {
				username,
				password
			})
			console.log(response)
			return response.data.data
		} catch (error) {
			console.error('Error fetching registration:', error)
			throw error
		}
	}
)
