import React from 'react';
import { Card, Image, Text, Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { agregarCarrito, sumarProducto } from '../redux/actions';
import toast from 'react-hot-toast';

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
			toast('Agregado al carrito', {
				icon: '🛒',
			});
		} else {
			dispatch(sumarProducto(nombre));
			toast('Agregado al carrito', {
				icon: '🛒',
			});
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
						fontSize: 13,
						/* height: '30px', */
						padding: '4px',
					}}
					variant='gradient'
					gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
					onClick={(e) => handleButton(`${nombre}`)}>
					Comprar
				</Button>
			</Card.Section>
		</Card>
	);
}

export default PromoCard;
