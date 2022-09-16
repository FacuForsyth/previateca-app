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

export default function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

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
					<Text>📍Vinos</Text>
					<Text>Cerveza</Text>
					<Text>📍Vinos</Text>
					<Text>📍Vinos</Text>
					<Text>📍Vinos</Text>
					<Text>📍Vinos</Text>
					<Text>Application navbar</Text>
					<Text>Application navbar</Text>
					<Text>Application navbar</Text>
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
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>

			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>

			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
			<h1>TARJETA</h1>
		</AppShell>
	);
}
