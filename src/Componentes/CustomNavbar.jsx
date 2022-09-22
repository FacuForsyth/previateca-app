/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Text, Button } from '@mantine/core';
import categorias from './categorias';
import imgHielo from '../icons/ice-cubes.png'

function CustomNavbar({ opened }) {
	const catego = categorias.concat({title: 'Hielo / Vasos', img: imgHielo})
	return (
		<Navbar p='md' hiddenBreakpoint='sm' hidden={!opened} width={{ sm: 200, lg: 300 }}>
			{catego.map((tipos) => {
				{/* COMO AGREGAR :HOVER PARA QUE SE VEA SELECCIONADO IGUAL Q LA NAVBAR MARTINE*/}
				return <Button variant="white" color="red" key={`${tipos.title}`}>
					<img src={tipos.img} alt='' width='32px' />
					{`${tipos.title}`}
					</Button>;
			})}
		</Navbar>
	);
}

export default CustomNavbar;


/* 
	{ title: 'PROMOS', icon: `${require('../icons/002-beers.png')}` },
	{ title: 'Aperitivos', icon: `${require('../icons/fernet.png')}` },
	{ title: 'Cervezas', icon: `${require('../icons/beer (2).png')}` },
	{ title: 'Vodkas', icon: `${require('../icons/vodka (1).png')}` },
	{ title: 'Vinos tintos', icon: `${require('../icons/vino (4).png')}` },
	{ title: 'Vinos blancos', icon: `${require('../icons/vino (4).png')}` },
	{ title: 'Gaseosas', icon: `${require('../icons/coca (2).png')}` },
	{ title: 'Champagnes', icon: `${require('../icons/champagne (2).png')}` },
	{ title: 'Gin / Ron / Tequila', icon: `${require('../icons/gin (2).png')}` },
	{ title: 'Energizantes', icon: `${require('../icons/energy (1).png')}` },
	{ title: 'Jugos', icon: `${require('../icons/juice (1).png')}` },
	{ title: 'Cigarrillos', icon: `${require('../icons/cigarette.png')}` },
*/