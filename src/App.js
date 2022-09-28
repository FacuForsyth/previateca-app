/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { AppShell, createStyles, useMantineTheme } from '@mantine/core';

import MainContainer from './Componentes/MainContainer.jsx';
import TopContainer from './Componentes/TopContainer';
import CustomNavbar from './Componentes/CustomNavbar.tsx';
import CustomFooter from './Componentes/Footer';
import CustomHeader from './Componentes/CustomHeader';
import BannerCarrito from './Componentes/BannerCarrito';
import CustomCarousel from './Componentes/CustomCarousel.jsx';
import { useSelector } from 'react-redux';
//import Demo from './Componentes/DEMO.tsx';

//------------------------------------
const useStyles = createStyles((theme) => ({
	AppShell: {
		main: {
			//background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fffffc',

			// Para pantallas grandes
			[`@media (max-width: ${theme.breakpoints.xs}px)`]: {},
			'@media (min-width: 800px)': {
				paddingRight: '2.5rem',
			},
			// Para pantallas chicas, y sin usar modelos predeterminados
			'@media (max-width: 800px)': {
				paddingLeft: '0.5rem',
				paddingRight: '1rem',
			},
		},
	},
}));
//------------------------------------
export default function App() {
	const { classes } = useStyles();
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	let cart = useSelector((state) => state.carrito);
	let localCart = cart.map((product) => product.nombre);

	return (
		<AppShell
			className={classes.AppShell}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={<CustomNavbar opened={opened} setOpened={setOpened} />}
			footer={<CustomFooter opened={opened} setOpened={setOpened} />}
			header={<CustomHeader theme={theme} opened={opened} setOpened={setOpened} />}>
			<TopContainer />
			<br />
			<CustomCarousel localCart={localCart} />
			<br />
			<MainContainer localCart={localCart} />
			<BannerCarrito />
		</AppShell>
	);
}
