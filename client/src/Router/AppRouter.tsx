import GamePage from '@pages/GamePage'
import HomePage from '@pages/HomePage'
import NotFound from '@pages/NotFound'
import RegisterPage from '@pages/RegisterPage'

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
	{
		path: 'register',
		element: <RegisterPage />,
	},
	{
		path: 'game',
		element: <GamePage />,
	},
]
