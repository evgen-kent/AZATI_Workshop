import Layout from './../../layouts/Layout'
import style from './App.module.scss'
import ProductCard from '../../components/product-card/product-card'
import { useEffect } from 'react'
import { IProduct } from '../../types/productCardType'
import { useDispatch, useSelector } from 'react-redux'
import { productsData } from '../../store/product/productSelector'
import { AppDispatch } from '../../store/store'
import { getProductAction } from '../../store/product/productThunk'
import { Box, Typography, useMediaQuery } from '@mui/material'
import theme, { THEME_COLOR_BLACK, white } from '../../theme'
import './styles.scss'
import TrendyImage from './../../assets/img/trendy-fashionable-couple-posing.jpg'
import { StarIcon } from '../../components/UI/icons'
import LogoBar from './LogoBar'
import PrimaryButton from '../../components/UI/primary-button'

const Home = (): JSX.Element => {
	const dispatch = useDispatch<AppDispatch>()
	const products = useSelector(productsData)
	useEffect(() => {
		dispatch(getProductAction())
	}, [dispatch])

	const primaryButtonWidth = useMediaQuery('(max-width: 390px)') ? 358 : 210

	const firstStarSize = useMediaQuery('(max-width: 390px)') ? 76 : 104
	const secondStarSize = useMediaQuery('(max-width: 390px)') ? 44 : 56

	return (
		<Layout title='SHOP.CO'>
			<Box className='MainHat'>
				<Box className='MainInfoWrapper'>
					<Box className='WelcomeTextWrapper'>
						<Typography className='H1' variant='h1'>
							FIND CLOTHES THAT MATCHES YOUR STYLE
						</Typography>
						<Typography
							className='Body2'
							variant='body2'
							color={theme.palette.primary.light}
							sx={{
								marginTop: { xs: '20px', md: '23px' },
								marginBottom: { xs: '24px', md: '31px' },
								fontSize: { xs: '14px', md: '16px' },
								fontWeight: '300',
								letterSpacing: { xs: '-0.56px', md: '-0.64px' },
								lineHeight: { xs: '20px', md: '22px' }
							}}
						>
							Browse through our diverse range of meticulously crafted garments,
							designed to bring out your individuality and cater to your sense
							of style.
						</Typography>
						<PrimaryButton width={primaryButtonWidth} height={52}>
							<Typography
								color={white}
								sx={{
									fontWeight: { xs: '500', md: '400' },
									lineHeight: 'normal'
								}}
							>
								Shop Now
							</Typography>
						</PrimaryButton>
						<Box
							className='statistics-wrapper'
							color={theme.palette.primary.main}
						>
							<Box className='statistics-box'>
								<Typography
									variant='body1'
									color={theme.palette.primary.main}
									sx={{
										fontSize: { xs: '24px', md: '40px' },
										fontWeight: '600',
										lineHeight: 'normal',
										letterSpacing: { xs: '-0.96px', md: '-1.6px' }
									}}
								>
									200+
								</Typography>
								<Typography
									variant='body2'
									color={theme.palette.primary.light}
									sx={{
										fontSize: { xs: '12px', md: '16px' },
										fontWeight: '300',
										lineHeight: '22px',
										letterSpacing: { xs: '-0.48px', md: '-0.64px' }
									}}
								>
									International Brands
								</Typography>
							</Box>
							<Box bgcolor={THEME_COLOR_BLACK[10]} className='divider'></Box>
							<Box className='statistics-box'>
								<Typography
									variant='body1'
									color={theme.palette.primary.main}
									sx={{
										fontSize: { xs: '24px', md: '40px' },
										fontWeight: '600',
										lineHeight: 'normal',
										letterSpacing: { xs: '-0.96px', md: '-1.6px' }
									}}
								>
									2,000+
								</Typography>
								<Typography
									variant='body2'
									color={theme.palette.primary.light}
									sx={{
										fontSize: { xs: '12px', md: '16px' },
										fontWeight: '300',
										lineHeight: '22px',
										letterSpacing: { xs: '-0.48px', md: '-0.64px' }
									}}
								>
									High-Quality Products
								</Typography>
							</Box>
							<Box
								bgcolor={THEME_COLOR_BLACK[10]}
								className='divider escaping-divider'
							></Box>
							<Box className='statistics-box'>
								<Typography
									variant='body1'
									color={theme.palette.primary.main}
									sx={{
										fontSize: { xs: '24px', md: '40px' },
										fontWeight: '600',
										lineHeight: 'normal',
										letterSpacing: { xs: '-0.96px', md: '-1.6px' }
									}}
								>
									30,000+
								</Typography>
								<Typography
									variant='body2'
									color={theme.palette.primary.light}
									sx={{
										fontSize: { xs: '12px', md: '16px' },
										fontWeight: '300',
										lineHeight: '22px',
										letterSpacing: { xs: '-0.48px', md: '-0.64px' }
									}}
								>
									Happy Customers
								</Typography>
							</Box>
						</Box>
					</Box>

					<Box
						component='img'
						className='trendy-image'
						sx={{
							height: { xs: '448px', md: '663px' },
							width: { xs: 'unset', md: '670px' }
						}}
						alt=''
						src={TrendyImage}
					/>
					<Box className='stars-container'>
						<StarIcon width={firstStarSize} height={firstStarSize} />
						<StarIcon width={secondStarSize} height={secondStarSize} />
					</Box>
				</Box>
				<LogoBar />
			</Box>

			<div className={style.main}>
				{/* для примера карточки сделан div с белым фоном  */}
				<div className={style.products_row}>
					{products.map((product: IProduct) => (
						<ProductCard
							key={product.id}
							name={product.name}
							image={product.image}
						/>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Home
