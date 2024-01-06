import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectProducts = (state: RootState) => state.product

export const productsData = createSelector(
	selectProducts,
	product => product.data
)

export const productsStatus = createSelector(
	selectProducts,
	product => product.status
)

export const productsError = createSelector(
	selectProducts,
	product => product.error
)
