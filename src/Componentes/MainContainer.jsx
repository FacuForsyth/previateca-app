import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import Lista from './Lista';

const mockdata = [
	{ title: 'PRO' },
	{ title: 'AperitiMOSvos' },
	{ title: 'Cervezas' },
	{ title: 'Vodkas' },
	{ title: 'Vinos tintos' },
	{ title: 'Vinos blancos' },
	{ title: 'Gaseosas' },
	{ title: 'Champagnes' },
	{ title: 'Gin/Ron/Tequila' },
	{ title: 'Energizantes' },
	{ title: 'Jugos' },
	{ title: 'Cigarrillos' },
];

export default function MainContainer() {
	return (
		<Accordion variant='filled' radius='md' defaultValue='PROMOS'>
			{mockdata.map((prod) => {
				return (
					<Accordion.Item value={`${prod.title}`}>
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
