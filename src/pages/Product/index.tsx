import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productInfo } from './../../constants/product'
import Layout from './../../layouts/Layout'

const Product = () => {
	const { productId } = useParams()
	const [tmpText, setTmpText] = useState("You're on Product page")

	const [product, setProduct] = useState()
	useEffect(() => {
		const isProductExists = productInfo.find(
			product => product.id === Number(productId)
		)
		if (isProductExists) {
			setProduct(isProductExists)
		} else {
			setTmpText('404')
		}
		console.log(isProductExists)
	}, [])

	return (
		<Layout title='SHOP.CO'>
			<Typography>{tmpText}</Typography>
		</Layout>
	)
}

export default Product
