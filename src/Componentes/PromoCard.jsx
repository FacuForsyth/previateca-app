import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { agregarCarrito } from '../redux/actions';

function PromoCard({ nombre, imagen, precio, categoria, key, id }) {
	let dispatch = useDispatch();
	const handleButton = (e) => {
		e.preventDefault();
		dispatch(
			agregarCarrito({
				nombre: nombre,
				cantidad: 1,
				precio,
				categoria,
			})
		);
	};

	return (
		<Card
			shadow='md'
			p='lg'
			radius='sm'
			withBorder
			style={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}>
			<Card.Section component='' href=''>
				<Image src={imagen} alt={nombre} maxwidth='100%' height={250} fit='contain' />
			</Card.Section>

			<Group position='apart' mt='md' mb='xs' style={{ display: 'flex', justifyContent: 'center' }}>
				<Text weight={600} align='center'>
					{nombre}
				</Text>
				<Badge
					color='pink'
					variant='light'
					size='xl'
					style={{
						position: 'absolute',
						top: 15,
						right: 15,
					}}>
					¡PROMO!
				</Badge>
			</Group>
			<Group
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 10,
				}}>
				<Text size='sm' color='dimmed' align='center' weight={600}>
					${precio}
				</Text>
				<Button
					variant='filled'
					color='gray'
					style={{ width: 'fit-content', display: 'flex', justifyContent: 'center' }}
					onClick={(e) => handleButton(e)}>
					Comprar
				</Button>
			</Group>
		</Card>
	);
}

export default PromoCard;
