import { createAsyncThunk } from '@reduxjs/toolkit'
import { api, token } from '../../constants/api'
import axios from 'axios'

export const getProductAction = createAsyncThunk('getProducts', async () => {
	const PRODUCT_URL = `${api}products`
	try {
		const response = await axios.get(PRODUCT_URL, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		return response.data.data
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
})
