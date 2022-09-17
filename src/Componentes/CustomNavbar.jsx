import React from 'react';
import { Navbar, Text } from '@mantine/core';
const mockdata = [
	{ title: 'PROMOS' },
	{ title: 'Aperitivos' },
	{ title: 'Cervezas' },
	{ title: 'Vodkas' },
	{ title: 'Vinos tintos' },
	{ title: 'Vinos blancos' },
	{ title: 'Gaseosas' },
	{ title: 'Champagnes' },
	{ title: 'Gin / Ron / Tequila' },
	{ title: 'Energizantes' },
	{ title: 'Jugos' },
	{ title: 'Cigarrillos' },
];

function CustomNavbar({ opened }) {
	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			{mockdata.map((tipos) => {
				return <Text>{`${tipos.title}`}</Text>;
			})}
		</Navbar>
	);
}

export default CustomNavbar;
