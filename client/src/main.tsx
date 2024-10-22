import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/Base.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</BrowserRouter>
)
