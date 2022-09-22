/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Accordion, Button, Text } from '@mantine/core';
import productos from '../Productos/productos.js';
import categorias from './categorias.js';
import Lista from './Lista';
import { IconCoin, IconExternalLink } from '@tabler/icons';
import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';

function MainContainer({ targetRef }) {
	const catego = categorias.concat({ title: 'Hielo / Vasos', icon: IconCoin, color: 'blue' });

	/* 	function scrollToTop(a) {
		console.log('🟢🟢🟢 SearchID: ', a);
		const element = document.getElementById(a);
		element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
	} */
	return (
		<Accordion variant='filled' radius='md' defaultValue=''>
			{catego.map((prod) => {
				console.log('💥💥💥 ID: ', prod.title);
				const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 50 });

				return (
					<div key={`${prod.title}`} id={prod.title}>
						<Accordion.Item key={`${prod.title}`} value={`${prod.title}`} id={prod.title}>
							<Accordion.Control onClick={() => timer()}>
								<Text ref={targetRef} size='xs' mt={7}>
									{`${prod.title}`}
								</Text>
							</Accordion.Control>
							<Accordion.Panel>
								<Lista productos={productos.filter((p) => p.categoria === prod.title)} />
							</Accordion.Panel>
						</Accordion.Item>
					</div>
				);
			})}
		</Accordion>
	);
}
export default MainContainer;
