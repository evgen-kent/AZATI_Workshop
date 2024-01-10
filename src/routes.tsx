import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

const router = createBrowserRouter([
	{
		path: '/AZATI_Workshop',
		element: <Home />
	},
	{
		path: '/AZATI_Workshop/Products',
		element: <Products />
	}
])

export default router
