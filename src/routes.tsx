import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from "./components/404/NotFound";

const router = createBrowserRouter([
	{
		path: '/AZATI_Workshop',
		element: <Home />
	},
	{
		path: '/AZATI_Workshop/Products',
		element: <Products />
	},
	{
		path: '*',
		element: <NotFound/>
	}
])

export default router
