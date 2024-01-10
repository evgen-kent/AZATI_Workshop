import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productInfo } from './../../constants/product'
import Layout from './../../layouts/Layout'
import { IProductInfo } from 'types/productInfoType'

const Product = () => {
	const { productId } = useParams()
	const [errorText, setErrorText] = useState('')

	const [product, setProduct] = useState({} as IProductInfo)
	useEffect(() => {
		const foundProduct = productInfo.find(p => p.id === Number(productId))

		if (foundProduct) {
			setProduct(foundProduct)
		} else {
			// TODO: change this to redirect to 404 page (when it will be done)
			setErrorText('404')
			console.error(errorText)
		}
	}, [productId, errorText])

	return (
		<Layout title='SHOP.CO'>
			<Typography>{product.title}</Typography>
		</Layout>
	)
}

export default Product
