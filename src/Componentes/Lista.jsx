import React from 'react';
import { Tarjeta } from './Card';

function Lista({ productos }) {
	return (
		<div>
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
		</div>
	);
}

export default Lista;
