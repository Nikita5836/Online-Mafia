import { AppRouter } from './Router/AppRouter'
import { Routes, Route } from 'react-router-dom'

const App = (): JSX.Element => {
	return (
		<Routes>
			{AppRouter.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	)
}

export default App
