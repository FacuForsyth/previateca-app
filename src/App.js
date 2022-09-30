import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import MainContainer from './Componentes/MainContainer.jsx';
import TopContainer from './Componentes/TopContainer';
import CustomNavbar from './Componentes/CustomNavbar.tsx';
import CustomFooter from './Componentes/Footer';
import CustomHeader from './Componentes/CustomHeader';
import BannerCarrito from './Componentes/BannerCarrito';
import CustomCarousel from './Componentes/CustomCarousel.jsx';
import { useSelector } from 'react-redux';
import useStyles from './AppCSS';

export default function App() {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	const [opened, setOpened] = useState(false);
	let globalCart = useSelector((state) => state.carrito);

	//console.log('🟢globalCart APP: ', globalCart);

	// EXPERIMENTO PARA UNIR  EL ESTADO DEL CARRUSEL CON ACORDEON

	//

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
			<CustomCarousel globalCart={globalCart} />
			<br />
			<MainContainer globalCart={globalCart} />
			<BannerCarrito />
		</AppShell>
	);
}
