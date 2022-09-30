import React from 'react';
import { Card, Image, Text, Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { agregarCarrito, sumarProducto } from '../redux/actions';

function PromoCard({ nombre, imagen, precio, categoria, globalCart }) {
	let dispatch = useDispatch();

	let localCart = globalCart.map((prod) => prod.nombre);

	const handleButton = (e) => {
		 
		if (!localCart.includes(nombre)) {
			dispatch(
				agregarCarrito({
					nombre: nombre,
					cantidad: 1,
					precio,
					categoria,
				})
			);
		} else {
			dispatch(sumarProducto(nombre));
		}
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
				<Image src={imagen} alt={nombre} /* maxwidth='100%' height={300} */ fit='contain' />
				<Text
					style={{
						position: 'absolute',
						zIndex: 1,
						top: '55%',
						right: '4%',
						padding: '15px 5px',
					}}
					size='xl'
					weight={600}
					color='gray.0'>
					${precio}
				</Text>
				<Button
					style={{
						width: 'fit-content',
						display: 'flex',
						justifyContent: 'center',
						position: 'absolute',
						zIndex: 1,
						top: '72%',
						right: '5%',
						fontSize: 12,
						padding: ' 4px',
					}}
					variant='gradient'
					gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
					onClick={(e) => handleButton(`${nombre}`)}>
					Comprar
				</Button>
			</Card.Section>

			{/* <Group position='apart' mt='md' mb='xs' style={{ display: 'flex', justifyContent: 'center' }}>
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
			</Group> */}
			{/* <Group
				style={{
					marginTop: '15px',
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
			</Group> */}
		</Card>
	);
}

export default PromoCard;
