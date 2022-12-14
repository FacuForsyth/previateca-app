import React from 'react';
import { Card, Image, Text, Group, Button } from '@mantine/core';
import { agregarCarrito, restarProducto, sumarProducto } from '../redux/actions';
import { useDispatch } from 'react-redux';
import useStyles from '../css/Card';
import toast from 'react-hot-toast';
import { urlFor } from '../client';

export function Tarjeta({ nombre, imagen, precio, categoria, productosEnEstaCatego, disponible }) {
	const { classes } = useStyles();
	let esteProducto = productosEnEstaCatego.filter((prod) => prod.nombre === nombre);
	let cantidad = esteProducto[0]?.cantidad;
	let buttonSwith = cantidad ? true : false;
	const dispatch = useDispatch();

	const handlerSwitchButton = (e) => {
		e.preventDefault();
		buttonSwith = !buttonSwith;
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
	};

	const handlerClickMenos = (e) => {
		if (cantidad === 1) {
			buttonSwith = !buttonSwith;
		}
		dispatch(restarProducto(nombre));
		toast('Eliminado del carrito', {
			icon: '🗑',
		});
	};

	function handlerClickMas(e) {
		dispatch(sumarProducto(nombre));
		toast('Agregado al carrito', {
			icon: '🛒',
		});
	}

	return (
		<Card withBorder radius='sm' className={classes.card} id={nombre}>
			<Card.Section className={classes.imageSection}>
				<Image src={urlFor(imagen)} alt='' width='100%' fit='contain' />
			</Card.Section>
			<Card.Section className={classes.section}>
				<Group
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '14px',
					}}>
					<Text align='center' weight={600}>
						${precio}
					</Text>
				</Group>
				<Group
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text size='sm' color='dimmed' weight={550} align='center'>
						{nombre}
					</Text>
				</Group>
				<Group
					spacing={30}
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					{buttonSwith || esteProducto.length ? (
						<Group
							position='center'
							style={{
								gap: '11px',
							}}>
							<Button
								radius='sm'
								variant='gradient'
								gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
								onClick={handlerClickMenos}
								style={{ paddingLeft: '11px', paddingRight: '11px', height: '30px' }}>
								-
							</Button>
							<Text>{cantidad}</Text>
							<Button
								radius='sm'
								variant='gradient'
								gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
								onClick={handlerClickMas}
								style={{ paddingLeft: '11px', paddingRight: '11px', height: '30px' }}>
								+
							</Button>
						</Group>
					) : disponible ? (
						<Button
							variant='gradient'
							gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
							radius='sm'
							onClick={(e) => handlerSwitchButton(e)}
							style={{ flex: 1 }}>
							Comprar
						</Button>
					) : (
						<Button variant='outline' color='pink'>
							Sin Stock
						</Button>
					)}
				</Group>
			</Card.Section>
		</Card>
	);
}
