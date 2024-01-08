import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectRegistration = (state: RootState) => state.product

export const registrationData = createSelector(
	selectRegistration,
	registration => registration.data
)

export const registrationStatus = createSelector(
	selectRegistration,
	registration => registration.status
)

export const registrationError = createSelector(
	selectRegistration,
	registration => registration.error
)
