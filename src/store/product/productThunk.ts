import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/autorization'

export const getProductAction = createAsyncThunk('getProducts', async () => {
	try {
		const response = await api.get('/products')
		return response.data.data
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
})
