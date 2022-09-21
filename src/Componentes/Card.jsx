/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Card, Image, Text, Group, createStyles, Center, Button, Badge } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useState } from 'react';
import { useCounter } from '@mantine/hooks';
import { agregarCarrito } from '../redux/actions';
import { useDispatch } from 'react-redux';

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
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '-20px',
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
	const [carrito, setCarrito] = useState({
		producto: [],
	});
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
	};

	const handlerClickMenos = (e) => {
		handlers.decrement();
	};
	
	function handlerClickMas(e) {
		handlers.increment();
		console.log("antes", carrito)
		//console.log(!carrito.producto.includes(nombre))
		if (!carrito.producto.includes(nombre)) {
			setCarrito({
				...carrito,
				producto: carrito.producto.push(nombre),
			});

		}
		console.log("dsp", carrito)
		//dispatch(agregarCarrito(carrito));
	};


	return (
		<Card withBorder radius='md' className={classes.card}>
			<Card.Section className={classes.imageSection}>
				<Image src={imagen} alt='' width='100%' height={200} fit='contain' />
				<Badge className={classes.badge} color='grey'>
					<Text
						size='xl'
						weight={700}
						variant='gradient'
						gradient={{ from: 'yellow', to: 'pink', deg: 45 }}>
						${precio}
					</Text>
				</Badge>
			</Card.Section>
			<Card.Section className={classes.section}>
				<Group position='apart' mt='md'>
					<Text weight={500}>{nombre}</Text>
					{/* <Text size="xs" color="dimmed">
            Free recharge at any station
          </Text> */}

					{/* <Badge variant="outline">25% off</Badge> */}
				</Group>
				<Group spacing={30}>
					{/* <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              ${precio}
            </Text>
            <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text>
          </div> */}

					{buttonSwith ? (
						<Group position="center">
							<Button onClick={handlerClickMenos}>-</Button>
								<Text>{count}</Text>
							<Button onClick={handlerClickMas}>+</Button>
						</Group>
					) : (
						<Button onClick={(e) => handlerSwitchButton(e)} radius='xl' style={{ flex: 1 }}>
							Comprar
						</Button>
					)}
				</Group>
			</Card.Section>
		</Card>
	);
}
