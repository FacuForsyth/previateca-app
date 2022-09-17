import { useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Container,
	/* Aside,
	,
	Grid, */
} from '@mantine/core';

import MainContainer from './MainContainer';
import TopContainer from './TopContainer';

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
			navbar={
				<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
					<Text>📍PROMOS</Text>
					<Text>📍Aperitivos</Text>
					<Text>📍Cervezas</Text>
					<Text>📍Vodkas</Text>
					<Text>📍Vinos tintos</Text>
					<Text>📍Vinos blancos</Text>
					<Text>📍Gaseosas</Text>
					<Text>📍Champagnes</Text>
					<Text>📍Gin/Ron/Tequila</Text>
					<Text>📍Energizantes</Text>
					<Text>📍Jugos</Text>
					<Text>📍Cigarrillos</Text>
					<Text>📍Hielo/Vasos</Text>
				</Navbar>
			}
			/* aside={
				<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
					<Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
						<Text>Application sidebar</Text>
					</Aside>
				</MediaQuery>
			} */
			footer={
				<Footer height={60} p='md'>
					<h2 style={{ margin: '0px' }}>PREVIATEK 2022</h2>
				</Footer>
			}
			header={
				<Header height={70} p='md'>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							height: '100%',
						}}>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between ',
								alignItems: 'center',
								height: '100%',
								width: '100%',
								marginLeft: '-10px',
							}}>
							<Text> 🍹 Previatek</Text>
							<Text> 🛒 Carrito </Text>
						</div>
					</div>
				</Header>
			}>
			<TopContainer />
			<MainContainer />
		</AppShell>
	);
}
