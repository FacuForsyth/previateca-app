import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista.jsx';

import MainContainerCss from '../css/MainContainerCss.js';
import scrollToTargetAdjusted from './scrollToTargetAdjusted.jsx';

export default function MainContainer({ globalCart }) {
	const { classes } = MainContainerCss();
	const catego = categorias.concat({ title: 'Hielo / Vasos' });

	return (
		<Accordion
			variant='separated'
			radius='sm'
			defaultValue='PROMOS'
			className={classes.MainAccordion}
			styles={{
				content: {
					/* backgroundColor: '#eaff00', */
					border: '1px solid #ededed',
					padding: 0,
				},
			}}>
			{catego.map((prod) => {
				return (
					<Accordion.Item id={prod.title} key={`${prod.title}`} value={`${prod.title}`}>
						<Accordion.Control
							style={{
								/* backgroundColor: '#aeff00', */
								padding: '0.8rem',
							}}
							onClick={() =>
								setTimeout(scrollToTargetAdjusted, 250, prod.title)
							}>{`${prod.title}`}</Accordion.Control>
						<Accordion.Panel
							style={{
								/* backgroundColor: '#00eaff', */
								padding: '0px',
								margin: '0px',
								width: '100%',
							}}>
							<Lista
								categoria={prod.title}
								productos={productos.filter((p) => p.categoria === prod.title)}
								globalCart={globalCart}
							/>
						</Accordion.Panel>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}
