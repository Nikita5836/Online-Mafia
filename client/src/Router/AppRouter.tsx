import HomePage from '@pages/HomePage'
import NotFound from '@pages/NotFound'

export interface Route {
	path: string
	element: React.ReactElement
}

export type AppRouter = Route[]

export const AppRouter: AppRouter = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]
