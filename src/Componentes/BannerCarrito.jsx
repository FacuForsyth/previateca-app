/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { createStyles, Text, Title, TextInput, Button, List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';
import InputsCarrito from './InptusCarrito';
import { useSelector, useDispatch } from 'react-redux';
import '../css/bannerCarrito.css';
import { carritoConProductos } from '../redux/actions';

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing.xl * 2,
		borderRadius: theme.radius.md,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]}`,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: 'column-reverse',
			padding: theme.spacing.xl,
		},
	},

	image: {
		maxWidth: '40%',

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	body: {
		paddingRight: theme.spacing.xl * 4,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: 'flex',
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: '100%',
		flex: '1',
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}));

export default function BannerCarrito() {
	const { classes } = useStyles();
	const dispatch = useDispatch();
	var carro = useSelector((state) => state.carrito);
	var carro2 = carritoConProductos();
	useEffect(() => {
		dispatch(carritoConProductos());
		console.log(carro2);
	}, [dispatch]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<InputsCarrito />

				<div className={classes.controls}>
					<TextInput
						placeholder='Algun comentartio...'
						classNames={{ input: classes.input, root: classes.inputWrapper }}
					/>
					<Button variant='gradient' gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}>
						Enviar mi pedido
					</Button>
				</div>
			</div>

			<List
				spacing='xs'
				size='sm'
				center
				icon={
					<ThemeIcon color='teal' size={24} radius='xl'>
						<IconCircleCheck size={16} />
					</ThemeIcon>
				}>
				{carro.map((p) => (
					<List.Item>
						{p.cantidad}x {p.nombre}
					</List.Item>
				))}
			</List>

			<div className='carro'>
				{carro.map((p) => (
					<h3>
						{p.cantidad}x {p.nombre}{' '}
					</h3>
				))}
			</div>
		</div>
	);
}
