import Layout from '../../layouts/Layout'
import style from '../../styles/App.module.scss'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductAction } from '../../store/productSlice'
import { AppDispatch } from '../../store/store'
import { product } from '../../types/productCardType'

const Home = (): JSX.Element => {
	const dispatch = useDispatch<AppDispatch>()
	const [products, setProducts] = useState([])
	useEffect(() => {
		dispatch(getProductAction())
			.then(response => {
				setProducts(response.payload.data)
			})
			.catch(error => {
				console.error('Error fetching types:', error)
				setProducts([])
			})
	}, [])
	return (
		<Layout title='SHOP.CO'>
			<div className={style.main}>
				{/* для примера карточки сделан div с белым фоном  */}
				<div className={style.products_row}>
					{products.map((product: product) => (
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
