import { createSlice } from '@reduxjs/toolkit'
import { isAuthAction } from './isAuthThunk'

type IsAuthState = {
	isAuth: boolean
}

const initialState: IsAuthState = {
	isAuth: false
}

export const isAuthSlice = createSlice({
	name: 'isAuth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(isAuthAction.fulfilled, (state, action) => {
			if (action.payload) {
				state.isAuth = true
			}
		})
	}
})
