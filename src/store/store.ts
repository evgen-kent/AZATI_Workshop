import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './product/productSlice'
import { registrationSlice } from './registration/registrationSlice'

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
		registration: registrationSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
