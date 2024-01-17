import { createSlice } from '@reduxjs/toolkit'

type IsAuthState = {
	isAuth: boolean
}

const initialState: IsAuthState = {
	isAuth: false
}

export const isAuthSlice = createSlice({
	name: 'isAuth',
	initialState,
	reducers: {
		checkAuth: (state, action) => {
			state.isAuth = action.payload
		}
	}
})
