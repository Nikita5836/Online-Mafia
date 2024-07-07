import HomePage from '@pages/HomePage/HomePage'

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
]
