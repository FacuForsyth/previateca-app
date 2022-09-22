import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import MainContainer from './Componentes/MainContainer';
import TopContainer from './Componentes/TopContainer';
import CustomNavbar from './Componentes/CustomNavbar';
import CustomFooter from './Componentes/Footer';
import CustomHeader from './Componentes/CustomHeader';
import BannerCarrito from './Componentes/BannerCarrito';
import CustomCarousel from './Componentes/CustomCarousel.jsx';
//import Demo from './Componentes/DEMO.tsx';

//------------------------------------

//------------------------------------
export default function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	//-----------------
	//-----------------
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fffffc',
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={<CustomNavbar opened={opened} />}
			footer={<CustomFooter />}
			header={<CustomHeader theme={theme} opened={opened} setOpened={setOpened} />}>
			<TopContainer />
			<br />
			<CustomCarousel />
			<br />
			<MainContainer />
			<BannerCarrito />
		</AppShell>
	);
}
