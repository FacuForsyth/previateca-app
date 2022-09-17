import { Accordion } from '@mantine/core';
import productos from './Productos/productos.js';
import { Tarjeta } from './Componentes/Card';

export default function MainContainer() {
	return (
		<Accordion variant='filled' radius='md' defaultValue='customization'>
			<Accordion.Item value='customization'>
				<Accordion.Control>Customization</Accordion.Control>
				<Accordion.Panel>
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
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='flexibility'>
				<Accordion.Control>Flexibility</Accordion.Control>
				<Accordion.Panel>
					Configure components appearance and behavior with vast amount of settings or overwrite any part
					of component styles
				</Accordion.Panel>
			</Accordion.Item>

			<Accordion.Item value='focus-ring'>
				<Accordion.Control>No annoying focus ring</Accordion.Control>
				<Accordion.Panel>
					With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
				</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
}
