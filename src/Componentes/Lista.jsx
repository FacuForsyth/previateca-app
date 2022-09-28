import { SimpleGrid } from '@mantine/core';
import React from 'react';
import { Tarjeta } from './Card';

function Lista({ productos, localCart }) {
	return (
		<SimpleGrid
			cols={4}
			spacing='lg'
			breakpoints={[
				{ maxWidth: 'md', cols: 3, spacing: 'md' },
				{ maxWidth: 'sm', cols: 2, spacing: 'sm' },
				{ maxWidth: 'xs', cols: 2, spacing: 'xs' },
			]}
			mt='md'>
			{productos.length === 0 ? (
				<h2>Cargando productos</h2>
			) : (
				productos.map((prod) => {
					return (
						<div key={prod.id}>
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
