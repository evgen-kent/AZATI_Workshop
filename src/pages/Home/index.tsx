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
import {
	StyledBody2,
	StyledButtonText,
	StyledStatisticsValueDefinitionTypography,
	StyledStatisticsValueTypography
} from './styled'

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
						<StyledBody2
							className='Body2'
							variant='body2'
							color={theme.palette.primary.light}
						>
							Browse through our diverse range of meticulously crafted garments,
							designed to bring out your individuality and cater to your sense
							of style.
						</StyledBody2>
						<PrimaryButton width={primaryButtonWidth} height={52}>
							<StyledButtonText color={white}>Shop Now</StyledButtonText>
						</PrimaryButton>
						<Box
							className='statistics-wrapper'
							color={theme.palette.primary.main}
						>
							<Box className='statistics-box'>
								<StyledStatisticsValueTypography
									variant='body1'
									color={theme.palette.primary.main}
								>
									200+
								</StyledStatisticsValueTypography>
								<StyledStatisticsValueDefinitionTypography
									variant='body2'
									color={theme.palette.primary.light}
								>
									International Brands
								</StyledStatisticsValueDefinitionTypography>
							</Box>
							<Box bgcolor={THEME_COLOR_BLACK[10]} className='divider'></Box>
							<Box className='statistics-box'>
								<StyledStatisticsValueTypography
									variant='body1'
									color={theme.palette.primary.main}
								>
									2,000+
								</StyledStatisticsValueTypography>
								<StyledStatisticsValueDefinitionTypography
									variant='body2'
									color={theme.palette.primary.light}
								>
									High-Quality Products
								</StyledStatisticsValueDefinitionTypography>
							</Box>
							<Box
								bgcolor={THEME_COLOR_BLACK[10]}
								className='divider escaping-divider'
							></Box>
							<Box className='statistics-box'>
								<StyledStatisticsValueTypography
									variant='body1'
									color={theme.palette.primary.main}
								>
									30,000+
								</StyledStatisticsValueTypography>
								<StyledStatisticsValueDefinitionTypography
									variant='body2'
									color={theme.palette.primary.light}
								>
									Happy Customers
								</StyledStatisticsValueDefinitionTypography>
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
