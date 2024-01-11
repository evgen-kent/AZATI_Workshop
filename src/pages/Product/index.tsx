import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productInfo } from './../../constants/product'
import Layout from './../../layouts/Layout'
import { IProductInfo } from 'types/productInfoType'
import RatingBar from './../../components/UI/rating-bar'
import { THEME_COLOR_BLACK } from './../../theme'
import PrimaryButton from './../../components/UI/primary-button'
import { StyledActiveSizeButton, StyledInactiveSizeButton } from './styled'
import { ColorPicker } from './color-picker'
import ItemCounter from './item-counter'
import './styles.scss'
import Price from './price'

const Product = () => {
	const { productId } = useParams()
	const [errorText, setErrorText] = useState('')
	const [count, setCount] = useState(1)

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

	const displaySize = useMediaQuery('(max-width: 390px)') ? 'sm' : 'lg'

	return (
		<Layout title='SHOP.CO'>
			<Box className='wrapper'>
				<Box component='img' src={product.image} />
				<Box className='info-wrapper'>
					<Box className='main-info'>
						<Typography
							variant='h3'
							style={{
								textTransform: 'uppercase',
								lineHeight: '28px',
								userSelect: 'none'
							}}
						>
							{product.title}
						</Typography>
						<Box className='rating-box'>
							<RatingBar name='read' defaultValue={product.rating} />
							<Box className='rating'>
								<Typography
									className='product-rating'
									style={{ color: THEME_COLOR_BLACK[100] }}
								>
									{`${product.rating}/`}
								</Typography>
								<Typography variant='body1' style={{ lineHeight: 'normal' }}>
									5
								</Typography>
							</Box>
						</Box>
						<Price
							totalCost={product.totalCost}
							initialCost={product.initialCost}
							discount={product.discount}
						/>
						<Typography
							className='product-description'
							variant='body1'
							sx={{ marginTop: { xs: '22px', md: '17px' } }}
						>
							{product.description}
						</Typography>
					</Box>
					<Divider />
					<Box className='select-color-box'>
						<Typography
							className='select-box-title'
							variant='body1'
							sx={{ marginBottom: { xs: '16px', md: '15px' } }}
						>
							Select Color
						</Typography>
						<ColorPicker initialColors={product.colors} />
					</Box>
					<Divider />
					<Box className='select-size-box'>
						<Typography
							className='select-box-title'
							variant='body1'
							style={{ marginBottom: '15px' }}
						>
							Select Size
						</Typography>
						<Box className='size-buttons-wrapper'>
							<StyledInactiveSizeButton displaySize={displaySize}>
								Small
							</StyledInactiveSizeButton>
							<StyledInactiveSizeButton displaySize={displaySize}>
								Medium
							</StyledInactiveSizeButton>
							<StyledActiveSizeButton displaySize={displaySize}>
								Large
							</StyledActiveSizeButton>
							<StyledInactiveSizeButton displaySize={displaySize}>
								X-Large
							</StyledInactiveSizeButton>
						</Box>
					</Box>
					<Divider />
					<Box
						className='buttons-wrapper'
						sx={{ gap: { xs: '12px', md: '20px' }, minWidth: '88px' }}
					>
						<ItemCounter setCount={setCount} count={count} />
						<PrimaryButton
							className='add-to-cart-button'
							style={{ maxWidth: '501px' }}
							fullWidth
						>
							Add to Cart
						</PrimaryButton>
					</Box>
				</Box>
			</Box>
		</Layout>
	)
}

export default Product
