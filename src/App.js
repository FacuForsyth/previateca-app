import { useCallback, useEffect, useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
} from '@mantine/core';
import { Tarjeta } from './Componentes/Card';
import productos from './Productos/productos.js'

export default function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
console.log(productos);
	//-----------------
	//-----------------
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
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
			aside={
				<MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
					<Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
						<Text>Application sidebar</Text>
					</Aside>
				</MediaQuery>
			}
			footer={
				<Footer height={60} p='md'>
					Application footer
				</Footer>
			}
			header={
				<Header height={70} p='md'>
					<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>

						<Text> ⚠️ Previatek</Text>
					</div>
				</Header>
			}>
				{
          productos.length === 0
          ? <h2>Not recipe found</h2> 
          : productos.map(prod =>{
            return(
                <Tarjeta nombre={prod.nombre} imagen={prod.imagen} precio={prod.precio} categoria={prod.categoria} key={prod.id} id={prod.id} />
            )
          })
        }
		</AppShell>
	);
}
