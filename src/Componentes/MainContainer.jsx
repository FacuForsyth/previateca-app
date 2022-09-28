import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista';

import MainContainerCss from '../css/MainContainerCss';

export default function MainContainer({ localCart }) {
	const { classes } = MainContainerCss();

	function scrollToTargetAdjusted(id) {
		var element = document.getElementById(id);
		var headerOffset = 72;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}

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
								productos={productos.filter((p) => p.categoria === prod.title)}
								localCart={localCart}
							/>
						</Accordion.Panel>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}
