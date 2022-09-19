import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista';

export default function MainContainer() {
	return (
		<Accordion variant='filled' radius='md' defaultValue=''>
			{categorias.map((prod) => {
				return (
					<Accordion.Item key={`${prod.title}`} value={`${prod.title}`}>
						<Accordion.Control>{`${prod.title}`}</Accordion.Control>
						<Accordion.Panel>
							<Lista productos={productos} />
						</Accordion.Panel>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}
