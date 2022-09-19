import React from 'react';
import { Tarjeta } from './Card';

function Lista({ cervezas }) {
	return (
		<div>
			{cervezas.length === 0 ? (
				<h2>Cargando cervezas</h2>
			) : (
				cervezas.map((prod) => {
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
