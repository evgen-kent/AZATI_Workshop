import Layout from '../../layouts/Layout'
import style from '../../styles/App.module.scss'
import ProductCard from '../../components/ProductCard'
import { useEffect } from 'react'
import { IProduct } from '../../types/productCardType'
import { useDispatch, useSelector } from 'react-redux'
import { productsData } from '../../store/product/productSelector'
import { AppDispatch } from '../../store/store'
import { getProductAction } from '../../store/product/productThunk'

const Home = (): JSX.Element => {
	const dispatch = useDispatch<AppDispatch>()
	const products = useSelector(productsData)
	useEffect(() => {
		dispatch(getProductAction())
	}, [dispatch])
	return (
		<Layout title='SHOP.CO'>
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
