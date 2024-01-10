import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectLogin = (state: RootState) => state.product

export const loginData = createSelector(
	selectLogin,
	registration => registration.data
)

export const loginStatus = createSelector(
	selectLogin,
	registration => registration.status
)

export const loginError = createSelector(
	selectLogin,
	registration => registration.error
)
