import { SimpleGrid } from '@mantine/core';
import React from 'react';
import { Tarjeta } from './Card';

import useStyles from '../css/Lista';

function Lista({ productos, localCart }) {
	const { classes } = useStyles();
	return (
		<SimpleGrid
			style={{
				/* backgroundColor: '#00ffb3', */
				padding: '0px',
				margin: '0px',
				width: '100%',
				height: '100%',
			}}
			cols={4}
			spacing='xs'
			breakpoints={[
				{ maxWidth: 'md', cols: 3, spacing: 'md' },
				{ maxWidth: 'sm', cols: 3, spacing: 'sm' },
				{ maxWidth: 'xs', cols: 2, spacing: 'xs' },
			]}
			mt='md' >
			{productos.length === 0 ? (
				<h2>Cargando productos</h2>
			) : (
				productos.map((prod) => {
					return (
						<div
							key={prod.id}
							className={classes.cardContainer}
							style={{
								/* backgroundColor: '#00ffb3', */
								padding: '0px',
								margin: '0px',
								width: '100%',
								height: '100%',
								lineHeight: 0,
							}}>
							<Tarjeta
								nombre={prod.nombre}
								imagen={prod.imagen}
								precio={prod.precio}
								categoria={prod.categoria}
								id={prod.id}
							/>
							<br />
						</div>
					);
				})
			)}
		</SimpleGrid>
	);
}

export default Lista;
