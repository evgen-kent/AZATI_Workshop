import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

const router = createBrowserRouter([
	{
		path: '/AZATI_Workshop',
		element: <Home />
	},
	{
		path: `/AZATI_Workshop/products/:productId`,
		element: <Product />
	}
])

export default router
