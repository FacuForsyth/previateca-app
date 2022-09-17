import React from 'react';
import { Navbar, Text } from '@mantine/core';
import categorias from './categorias';

function CustomNavbar({ opened }) {
	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			{categorias.map((tipos) => {
				return <Text key={`${tipos.title}`}>{`${tipos.title}`}</Text>;
			})}
		</Navbar>
	);
}

export default CustomNavbar;
