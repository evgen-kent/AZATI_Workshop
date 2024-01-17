import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectIsAuthState = (state: RootState) => state.isAuth

export const isAuthData = createSelector(
	selectIsAuthState,
	isAuthState => isAuthState.isAuth
)
