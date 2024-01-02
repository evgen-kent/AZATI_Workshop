import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../types/productCardType'
import { getProductAction } from './productThunk'

type ProductsState = {
	data: IProduct[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: ProductsState = {
	data: [],
	status: 'idle',
	error: null
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
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
