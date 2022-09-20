import React from 'react';
import { Navbar, Text, Button } from '@mantine/core';
import categorias from './categorias';

function CustomNavbar({ opened }) {
	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			{categorias.map((tipos) => {
				{/* COMO AGREGAR :HOVER PARA QUE SE VEA SELECCIONADO IGUAL Q LA NAVBAR MARTINE*/}
				return <Button /* leftIcon={<IconDatabase />} */ variant="white" color="red" key={`${tipos.title}`}>{`${tipos.title}`}</Button>;
			})}
		</Navbar>
	);
}

export default CustomNavbar;
