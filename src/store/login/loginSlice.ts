import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '../../types/userType'
import { loginAction } from './loginThunk'

type loginState = {
	data: IUser
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: loginState = {
	data: {
		email: '',
		password: ''
	},
	status: 'idle',
	error: null
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loginAction.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(loginAction.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload
			})
			.addCase(loginAction.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload as string
			})
	}
})
