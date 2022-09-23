/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
	createStyles,
	Text,
	Title,
	Container,
	TextInput,
	Button,
	List,
	ThemeIcon,
	SimpleGrid,
	Textarea,
	Group,
	ActionIcon,
} from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';
import InputsCarrito from './InptusCarrito';
import { useSelector, useDispatch } from 'react-redux';
import '../css/bannerCarrito.css';
import { carritoConProductos } from '../redux/actions';

import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
//import { ContactIconsList } from '../ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 400,
		boxSizing: 'border-box',
		backgroundImage: `linear-gradient(-60deg, ${theme.colors.pink[7]} 0%, ${theme.colors.orange[1]} 100%)`,
		borderRadius: theme.radius.md,
		padding: theme.spacing.xl * 2.5,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			padding: theme.spacing.xl * 0.5,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		display: 'flex',
		justifyContent: 'center',
		fontSize: '50px',
		fontWeight: '100',
		color: theme.black,
		lineHeight: 1,
	},
	title2: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		display: 'flex',
		justifyContent: 'center',
		fontSize: '50px',
		fontWeight: '900',
		color: theme.black,
		lineHeight: 1,
	},

	description: {
		//color: theme.colors[theme.primaryColor][0],
		maxWidth: 300,
		display: 'flex',
		justifyContent: 'center',
		color: theme.black,
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	form: {
		backgroundColor: theme.white,
		padding: theme.spacing.xl,
		borderRadius: theme.radius.md,
		boxShadow: theme.shadows.lg,
	},

	social: {
		color: theme.white,

		'&:hover': {
			color: theme.colors[theme.primaryColor][1],
		},
	},

	input: {
		backgroundColor: theme.white,
		borderColor: theme.colors.gray[4],
		color: theme.black,

		'&::placeholder': {
			color: theme.colors.gray[5],
		},
	},

	inputLabel: {
		color: theme.black,
	},

	control: {
		backgroundColor: theme.colors[theme.primaryColor][6],
	},

	listaCompras: {
		minWidth: '100px !important',
		display: 'flex !important',
		flexDirection: 'column !important',
		//backgroundColor: 'pink',
	},
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function BannerCarrito() {
	const { classes } = useStyles();
	const icons = social.map((Icon, index) => (
		<ActionIcon key={index} size={28} className={classes.social} variant='transparent'>
			<Icon size={22} stroke={1.5} />
		</ActionIcon>
	));

	const dispatch = useDispatch();
	var carro = useSelector((state) => state.carrito);

	useEffect(() => {
		dispatch(carritoConProductos());
		//console.log('⚠️ Carrito del Banner: ', carro);
	}, [dispatch, carro]);

	let SubTotal = carro.length ? carro.map((p) => Number(p.cantidad * p.precio)) : 0;
	//console.log('🟢 SubTotal: ', typeof SubTotal[0]);
	let Total = 0;
	if (SubTotal.length) for (let n of SubTotal) Total += n;
	//console.log('🟢 Total: ', Total);

	return (
		<div className={classes.wrapper} id='Carrito'>
			<SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
				<div>
					<Title className={classes.title}>Carrito</Title>
					<Text className={classes.description} mt='sm' mb={30} size='lg' weight={600}>
						Hace tu pedido y te contestaremos enseguida!
					</Text>
					<List
						spacing='xs'
						size='sm'
						center
						icon={
							<ThemeIcon color='teal' size={24} radius='xl'>
								<IconCircleCheck size={16} />
							</ThemeIcon>
						}>
						{carro.length ? (
							carro.map((p, i) => (
								<List.Item key={i} className={classes.listaCompras}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'flex-start',
											justifyContent: 'flex-start',
										}}>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'flex-start',
												justifyContent: 'flex-start',
												marginBottom: '10px',
											}}>
											<Text size='lg' weight={600}>
												{p.nombre} - (C/U a💲{p.precio})
											</Text>
										</div>
										<div
											style={{
												maxWidth: '300px',
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'space-between',
												alignItems: 'flex-start',
												marginBottom: '10px',
											}}>
											<Text size='lg' weight={600}>
												Cantidad:
											</Text>
											<Button
												style={{ margin: '0px 10px' }}
												variant='outline'
												color='dark'
												radius='xl'
												size='xs'
												compact>
												➖
											</Button>

											<Text size='lg' weight={600}>
												{p.cantidad}
											</Text>
											<Button
												style={{ margin: '0px 10px' }}
												variant='outline'
												color='dark'
												radius='xl'
												size='xs'
												compact>
												➕
											</Button>
											<Button
												style={{ margin: '0px 10px' }}
												variant='outline'
												color='dark'
												radius='xl'
												size='xs'
												compact>
												⛔
											</Button>
										</div>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'flex-start',
												marginBottom: '10px',
											}}>
											<Text size='lg' weight={600}>
												Subtotal: 💲{`${p.precio * p.cantidad}`}
											</Text>
										</div>
									</div>
								</List.Item>
							))
						) : (
							<Text
								size='lg'
								weight={700}
								style={{
									display: 'flex',
									justifyContent: 'center',
									//fontSize: '50px',
									color: 'black',
									lineHeight: 1,
								}}>
								Tu Carrito Está Vacío 😥 . Llenalo y empezá la fiesta 🎉!!
							</Text>
						)}
					</List>
					<br />
					{carro.length ? (
						<Text size='lg' weight={700}>
							Total: 💲{Total}
						</Text>
					) : null}
				</div>
				<div className={classes.form}>
					<Text size='lg' weight={700} color='dark' className={classes.title2}>
						Tus Datos
					</Text>
					<br />
					<TextInput
						label='Nombre'
						placeholder='Leo Messi'
						required
						mt='md'
						classNames={{ input: classes.input, label: classes.inputLabel }}
					/>
					<TextInput
						label='Dirección'
						placeholder='Dónde es la fiesta?'
						required
						classNames={{ input: classes.input, label: classes.inputLabel }}
					/>
					<Textarea
						label='Comentario'
						placeholder='Necesitas aclarar algo?'
						minRows={4}
						mt='md'
						classNames={{ input: classes.input, label: classes.inputLabel }}
					/>

					<Group position='right' mt='md'>
						<Button
							className={classes.control}
							variant='gradient'
							gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}>
							¡ Pedílo !
						</Button>
					</Group>

					<Text size='lg' weight={1000}>
						mankiada
					</Text>
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
			</SimpleGrid>
		</div>
	);
}

{
	/* <div className={classes.joder} id='Carrito'>
			<Title>Carrito</Title>
			<br />
			<List
				spacing='xs'
				size='xl'
				center
				icon={
					<ThemeIcon color='teal' size={24} radius='xl'>
						<IconCircleCheck size={16} />
					</ThemeIcon>
				}>
				<Container className={classes.containerCarrito}>
					{carro.length ? (
						carro.map((p, i) => (
							<List.Item key={i} className={classes.listaCompras}>
								<Text>{p.cantidad}</Text>
								<Text> x </Text>
								<Text>{p.nombre}</Text>
								<Text>Precio: $ {p.precio}</Text>
								<Text>Subtotal: $ {`${p.precio * p.cantidad}`} </Text>
							</List.Item>
						))
					) : (
						<Text> Tu Carrito Está Vacío 😥 . Llenalo y empezá la fiesta 🎉!!</Text>
					)}
				</Container>
			</List>
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
		</div> */
}
