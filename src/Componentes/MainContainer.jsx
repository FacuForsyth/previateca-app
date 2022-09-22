import { Accordion } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista';

export default function MainContainer() {
	function scrollToTargetAdjusted(id) {
		console.log('🟢 id:', id);
		var element = document.getElementById(id);
		var headerOffset = 72;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
		console.log('💥', offsetPosition);

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}

	const catego = categorias.concat({ title: 'Hielo / Vasos' });
	return (
		<Accordion variant='filled' radius='md' defaultValue=''>
			{catego.map((prod) => {
				return (
					<Accordion.Item id={prod.title} key={`${prod.title}`} value={`${prod.title}`}>
						<Accordion.Control
							onClick={() =>
								setTimeout(scrollToTargetAdjusted, 250, prod.title)
							}>{`${prod.title}`}</Accordion.Control>
						<Accordion.Panel>
							<Lista productos={productos.filter((p) => p.categoria === prod.title)} />
						</Accordion.Panel>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}
