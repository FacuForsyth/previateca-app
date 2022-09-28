/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Card, Image, Text, Group, createStyles, Center, Button, Badge } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import { useCounter } from '@mantine/hooks';
import { agregarCarrito, restarProducto, sumarProducto } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../css/Card';

export function Tarjeta({ nombre, imagen, precio, categoria, id }) {
	const { classes } = useStyles();
	const [buttonSwith, setbuttonSwith] = useState(false);
	const [count, handlers] = useCounter(0, { min: 0, max: 12 });
	const dispatch = useDispatch();
	//let cart = useSelector((state) => state.carrito);

	const handlerSwitchButton = (e) => {
		e.preventDefault();
		setbuttonSwith(!buttonSwith);
		handlers.increment();
		dispatch(
			agregarCarrito({
				nombre: nombre,
				cantidad: 1,
				precio,
				categoria,
			})
		);
	};

	const handlerClickMenos = (e) => {
		if (count === 1) {
			setbuttonSwith(!buttonSwith);
		}
		handlers.decrement();
		//console.log('💥 Restar Producto: ', nombre);
		dispatch(restarProducto(nombre));
	};

	function handlerClickMas(e) {
		handlers.increment();
		//console.log('🟢Agregar Producto: ', nombre);
		dispatch(sumarProducto(nombre));
	}

	return (
		<Card withBorder radius='sm' className={classes.card} id={nombre}>
			<Card.Section className={classes.imageSection}>
				<Image src={imagen} alt='' width='100%' /* height={200} */ fit='contain' />
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
					<Text /* size='sm' color='dimmed' */ align='center' weight={600}>
						${precio}
					</Text>
				</Group>
				<Group
					/* position='apart'
					mt='md' */
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
					{buttonSwith ? (
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
							<Text>{count}</Text>
							<Button
								radius='sm'
								variant='gradient'
								gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
								onClick={handlerClickMas}
								style={{ paddingLeft: '11px', paddingRight: '11px', height: '30px' }}>
								+
							</Button>
						</Group>
					) : (
						<Button
							variant='gradient'
							gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
							radius='sm'
							onClick={(e) => handlerSwitchButton(e)}
							style={{ flex: 1 }}>
							Comprar
						</Button>
					)}
				</Group>
			</Card.Section>
		</Card>
	);
}
