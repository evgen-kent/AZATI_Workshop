import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api, token } from '../constants/api'

export const getProductAction = createAsyncThunk('getProducts', async () => {
	const PRODUCT_URL = `${api}products`
	try {
		const response = await axios.get(PRODUCT_URL, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		return response.data
	} catch (error) {
		console.error('Error fetching genres:', error)
		throw error
	}
})

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		data: [],
		status: 'idle',
		error: null as string | null
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProductAction.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(getProductAction.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload
			})
			.addCase(getProductAction.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload as string
			})
	}
})
