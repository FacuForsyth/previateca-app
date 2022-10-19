import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
		<MantineProvider
			theme={{
				fontFamily: 'Roboto, sans serif',
				spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
			}}>
			<App />
		</MantineProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals