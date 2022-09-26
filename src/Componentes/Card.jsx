/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Card, Image, Text, Group, createStyles, Center, Button, Badge } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import { useCounter } from '@mantine/hooks';
import { agregarCarrito, restarProducto, sumarProducto } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

//------------css
const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		padding: '0px',
	},

	imageSection: {
		padding: '0px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: -0.25,
		textTransform: 'uppercase',
	},

	section: {
		padding: 10,
		//borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'space-around',
		marginTop: '-20px',
		minHeight: '139px',
	},

	icon: {
		marginRight: 5,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
	},
	badge: {
		position: 'absolute',
		zIndex: 1,
		top: 10,
		right: 10,
		backgroundColor: 'white',
		padding: '15px 5px',
	},
}));

const mockdata = [
	{ label: '4 passengers', icon: IconUsers },
	{ label: '100 km/h in 4 seconds', icon: IconGauge },
	{ label: 'Automatic gearbox', icon: IconManualGearbox },
	{ label: 'Electric', icon: IconGasStation },
];

export function Tarjeta({ nombre, imagen, precio, categoria }) {
	const [buttonSwith, setbuttonSwith] = useState(false);
	const [count, handlers] = useCounter(0, { min: 0, max: 12 });

	let cart = useSelector((state) => state.carrito);
	const dispatch = useDispatch();

	const { classes } = useStyles();
	const features = mockdata.map((feature) => (
		<Center key={feature.label}>
			<feature.icon size={18} className={classes.icon} stroke={1.5} />
			<Text size='xs'>{feature.label}</Text>
		</Center>
	));

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
		<Card withBorder radius='sm' className={classes.card}>
			<Card.Section className={classes.imageSection}>
				<Image src={imagen} alt='' width='100%' /* height={200} */ fit='contain' />
				{/* <Badge className={classes.badge} radius='sm'>
					<Text
						size='xl'
						weight={600}
						variant='gradient'
						gradient={{ from: 'yellow', to: 'pink', deg: 45 }}>
						${precio}
					</Text>
				</Badge> */}
			</Card.Section>
			<Card.Section className={classes.section}>
				<Group 
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '10px'
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
