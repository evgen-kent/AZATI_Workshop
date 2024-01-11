import Layout from './../../layouts/Layout'
import ProductCard from '../../components/product-card/product-card'
import { IProduct } from '../../types/productCardType'
import { productsData } from '../../store/product/productSelector'
import { useSelector } from 'react-redux'
import style from './Products.module.scss'


const Products = () => {
    const products = useSelector(productsData)

    return (
        <div>
            <Layout title='Products'>
                <div className={style.products}>
                        {products.map((product: IProduct) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                image={product.image}
                            />
                        ))}
                </div>
            </Layout>   
        </div>
    )    
}

export default Products;