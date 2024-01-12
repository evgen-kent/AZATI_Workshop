import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from "./components/404/NotFound";

const router = createBrowserRouter([
	{
		path: '/AZATI_Workshop',
		element: <Home />
	},
	{
		path: '*',
		element: <NotFound/>
	}
])

export default router
