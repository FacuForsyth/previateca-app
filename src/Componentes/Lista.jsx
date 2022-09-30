import { SimpleGrid } from '@mantine/core';
import React from 'react';
import { Tarjeta } from './Card';

import useStyles from '../css/Lista';

function Lista({ productos, categoria, globalCart }) {
	const { classes } = useStyles();
	let productosEnEstaCatego = globalCart.filter((prod) => prod.categoria === categoria);

	return (
		<SimpleGrid
			className={classes.grid}
			cols={4}
			spacing='xs'
			breakpoints={[
				{ maxWidth: 'md', cols: 3, spacing: 'md' },
				{ maxWidth: 'sm', cols: 3, spacing: 'sm' },
				{ maxWidth: 'xs', cols: 2, spacing: 'xs' },
			]}
			/* mt='md' */
		>
			{productos.length === 0 ? (
				<h2>Cargando productos</h2>
			) : (
				productos.map((prod) => {
					return (
						<div key={prod.id} className={classes.cardContainer}>
							<Tarjeta
								nombre={prod.nombre}
								imagen={prod.imagen}
								precio={prod.precio}
								categoria={prod.categoria}
								id={prod.id}
								productosEnEstaCatego={productosEnEstaCatego}
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
