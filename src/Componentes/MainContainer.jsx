import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista';

export default function MainContainer({ localCart }) {
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
		<Accordion variant='separated' radius='sm' defaultValue='PROMOS'>
			{catego.map((prod) => {
				return (
					<Accordion.Item
						id={prod.title}
						key={`${prod.title}`}
						value={`${prod.title}`}
						style={{
							backgroundColor: '#F5F5F5',
							margin: '0.2rem 0rem',
						}}>
						<Accordion.Control
							onClick={() =>
								setTimeout(scrollToTargetAdjusted, 250, prod.title)
							}>{`${prod.title}`}</Accordion.Control>
						<Accordion.Panel>
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
