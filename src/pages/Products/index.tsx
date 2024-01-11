import Layout from './../../layouts/Layout'
import ProductCard from '../../components/product-card/product-card'
import { IProduct } from '../../types/productCardType'
import { productsData } from '../../store/product/productSelector'
import { useSelector } from 'react-redux'
import style from './Products.module.scss'
import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'
import { productCard } from '../../constants/product-card'

const Products = () => {
	// TODO: const products = useSelector(productsData)
    const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	// TODO: add logic to get data from productsData
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await new Promise(resolve => {
					setTimeout(() => {
						resolve({productCard})
					}, 2000)
				})
				setProducts(response.productCard)
				setLoading(false)
			} catch (error) {
				setError('An error occurred while uploading the data.');
				setLoading(false);
			}
		}
		fetchData()
	}, [])

	return (
		<div>
			<Layout title='Products'>
				{loading && (
					<div className={style.circularProgressContainer} >
						<CircularProgress size={80}/>
					</div>
				)}

				{error && <div>{error}</div>}

				{!loading && !error && (
					<div className={style.products}>
						{products.map((product: IProduct) => (
							<ProductCard
								key={product.id}
								name={product.name}
								image={product.image}
							/>
						))}
					</div>
				)}
			</Layout>
		</div>
	)
}

export default Products;