import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import MainContainer from './Componentes/MainContainer';
import TopContainer from './Componentes/TopContainer';
import CustomNavbar from './Componentes/CustomNavbar';
import CustomFooter from './Componentes/Footer';
import CustomHeader from './Componentes/CustomHeader';
import CustomCarousel from './Componentes/CustomCarousel.jsx';

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
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.indigo[0],
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
		</AppShell>
	);
}
