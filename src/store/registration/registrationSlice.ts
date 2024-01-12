import { createSlice } from '@reduxjs/toolkit'
import { registrationAction } from './registrationThunk'
import { IUser } from '../../types/userType'

type registrationState = {
	data: IUser
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: registrationState = {
	data: {
		email: '',
		password: ''
	},
	status: 'idle',
	error: null
}

export const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(registrationAction.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(registrationAction.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload
			})
			.addCase(registrationAction.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload as string
			})
	}
})
