import React from 'react';
import { Tarjeta } from './Card';

function Lista({ productos }) {
	return (
		<div>
			{productos.length === 0 ? (
				<h2>Not recipe found</h2>
			) : (
				productos.map((prod) => {
					return (
						<Tarjeta
							nombre={prod.nombre}
							imagen={prod.imagen}
							precio={prod.precio}
							categoria={prod.categoria}
							key={prod.id}
							id={prod.id}
						/>
					);
				})
			)}
		</div>
	);
}

export default Lista;
