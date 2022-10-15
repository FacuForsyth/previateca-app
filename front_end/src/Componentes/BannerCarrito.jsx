import React, { useEffect, useState } from 'react';
import {
	Text,
	Title,
	TextInput,
	Button,
	List,
	ThemeIcon,
	SimpleGrid,
	Textarea,
	Group,
	Select,
	NumberInput,
	Checkbox,
	Badge,
	Paper,
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons';
import { useSelector, useDispatch } from 'react-redux';
import '../css/bannerCarrito.css';
import { borrarProducto, carritoConProductos, restarProducto, sumarProducto } from '../redux/actions';

import plus from '../icons/plus.png';
import minus from '../icons/minus.png';
import deleteI from '../icons/deleteI.png';
import money from '../icons/money.png';

import categorias from './categorias';
import imgHielo from '../icons/ice-cubes.png';
import { useStyles, ICON_SIZE } from '../css/BannerCarritoCSS';

let iconos = { 'Hielo / Vasos': imgHielo };

for (let ico of categorias) iconos[ico.title] = ico.img;

const date = new Date();
const horario = date.getHours();
const min = date.getMinutes();

export default function BannerCarrito() {
	const { classes } = useStyles();

	const dispatch = useDispatch();
	var carro = useSelector((state) => state.carrito);

	const [checked, setChecked] = useState(false);
	const [cliente, setCliente] = useState({
		nombre: '',
		direccion: '',
		comentario: '',
		metodoPago: '',
		abonaCon: '',
	});
	//console.log(cliente);

	useEffect(() => {
		dispatch(carritoConProductos());
		//console.log('⚠️ Carrito del Banner: ', carro);
	}, [dispatch, carro]);

	let Pedido = carro
		.map((ped) => `${ped.cantidad}x ${ped.nombre} \n`)
		.join('')
		.toString();
	let SubTotal = carro.length ? carro.map((p) => Number(p.cantidad * p.precio)) : 0;
	//console.log('🟢 SubTotal: ', typeof SubTotal[0]);
	let Total = 0;
	if (SubTotal.length) for (let n of SubTotal) Total += n;
	//console.log('🟢 Total: ', Total);

	function handleChange(e) {
		console.log(e);
		//e.preventDefault();
		setCliente({
			...cliente,
			//lo seteo con el value
			[e.target.name]: e.target.value,
		});
		setErrors(validate({ ...cliente, [e.target.name]: e.target.value }));
	}

	function handleSelect(e) {
		//console.log(e)
		//e.preventDefault();
		setCliente({
			...cliente,
			metodoPago: e,
		});
		setErrors(validate({ ...cliente, metodoPago: e }));
	}

	function handleChangeAbona(e) {
		setCliente({
			...cliente,
			abonaCon: e,
		});
	}

	function handleCheckbox(e) {
		setChecked(e.currentTarget.checked);
		if (checked === false) {
			setCliente({
				...cliente,
				direccion: '*Retiro por el local*',
			});
		} else if (checked === true) {
			setCliente({
				...cliente,
				direccion: '',
			});
		}
	}

	function handlerClick(e) {
		//const orderTime = '🕐 *Hora del pedido:* ' + now.getHours() + 'hs' + now.getMinutes() + '\n'
		//e.preventDefault();

		//orderCustomerName = '*Cliente:* ' + document.getElementById('customerName').value + '\n'
		const textCliente = `🤙 *Cliente:* ${cliente.nombre} \n`;
		const textDireccion = `🛵 *Dirección:* ${cliente.direccion} \n`;
		const textMetodoPago = `💰 *Método de pago:* ${cliente.metodoPago} \n`;
		const textAbonaCon =
			cliente.metodoPago === 'Efectivo' ? `💵 *Abona con:* $${cliente.abonaCon} \n` : '\n';
		const textPedido = `🍻 *Detalle del pedido:* \n${Pedido} \n\n`;
		const textComentario = `📣 Comentario: ${cliente.comentario} \n`;
		const textTotal = `💲 *Total:* $${Total} \n\n\n`;
		const textConfirmado = `🍾🍾 *Gracias por tu pedido. Lo confirmamos en un momento...* `;

		const text = encodeURIComponent(
			textCliente +
				textDireccion +
				textMetodoPago +
				textAbonaCon +
				textPedido +
				textComentario +
				'\n' +
				textTotal +
				textConfirmado
		);

		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				navigator.userAgent
			) ||
			// eslint-disable-next-line no-useless-escape
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				navigator.userAgent
			)
		) {
			const link = `whatsapp://send?phone=543874153451&text=${text}&lang=es`;
			window.location.href = link;
		} else {
			var link2 = `https://wa.me/543874153451?text=${text}&lang=es`;
			window.location.href = link2;
		}
	}

	const [errors, setErrors] = useState({});
	function validate(cliente) {
		const errors = {};
		if (!cliente.nombre) {
			errors.nombre = 'Debe ingresar un nombre';
		}
		if (!cliente.direccion) {
			errors.direccion = 'Debe ingresar una direccion';
		}
		if (!cliente.metodoPago) {
			errors.metodoPago = 'Debe seleccionar un metodo de pago';
		} else if (!/^[0-9]+$/.test(cliente.abonaCon)) {
			errors.abonaCon = 'Solo puede contener números';
		}
		/* if(carro.length === 0){
			errors.carro = "El carrito se encuentra vacio"
		} */
		return errors;
	}

	const handlerClickMenos = (nombre, cantidad) => {
		if (cantidad > 1) dispatch(restarProducto(nombre));
	};

	function handlerClickMas(nombre, cantidad) {
		if (cantidad < 12) dispatch(sumarProducto(nombre));
	}
	function handlerClickBorrar(nombre) {
		dispatch(borrarProducto(nombre));
	}
	return (
		<div
			className={classes.wrapper}
			id='Carrito'
			style={{
				marginTop: '1rem',
			}}>
			{(horario === 0 && min < 25) || horario > 18 ? (
				<SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
					<div>
						<Title className={classes.title}>Carrito</Title>
						<Text
							className={classes.description}
							style={{ marginLeft: '25px' }}
							mt='sm'
							mb={30}
							size='lg'
							weight={600}>
							¡Hace tu pedido y te contestaremos enseguida!
						</Text>
						<List
							spacing='xs'
							size='sm'
							center
							icon={
								<ThemeIcon color='teal' size={24} radius='sm'>
									<IconCircleCheck size={10} />
								</ThemeIcon>
							}>
							{carro.length ? (
								carro.map((p, i) => (
									<Paper key={i} radius='sm' withBorder className={classes.card} mt={ICON_SIZE / 3}>
										<ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
											<img src={iconos[p.categoria]} alt={p.categoria} width='32px' />
										</ThemeIcon>

										<Text size='xl' align='center' weight={700} className={classes.Cardtitle}>
											{p.nombre}
											{/* <div
											style={{ maxWidth: '1.5rem', position: 'absolute', top: '10px', right: '20px' }}>
											{p.precio}&nbsp;
											<img
												style={{ maxWidth: '1.5rem'  }}
												src={price_tag}
												alt='price_tag'
											/>
										</div> */}
										</Text>

										<Group position='apart' mt='xs' style={{ gap: '5px' }}>
											<Text size='lg' color=''>
												Cantidad:
											</Text>
											<Button
												style={{}}
												variant='subtle'
												color='dark'
												radius='sm'
												size=''
												compact
												onClick={() => handlerClickMenos(p.nombre, p.cantidad)}>
												<img style={{ maxWidth: '1.5rem' }} src={minus} alt='minus' />
											</Button>

											<Text size='xl' color=''>
												{p.cantidad}
											</Text>
											<Button
												style={{}}
												variant='subtle'
												color='dark'
												radius='sm'
												size=''
												compact
												onClick={() => handlerClickMas(p.nombre, p.cantidad)}>
												<img style={{ maxWidth: '1.5rem' }} src={plus} alt='plus' />
											</Button>
										</Group>

										<Group position='apart' mt='md'>
											<Text size='lg'>Subtotal: {`${p.precio * p.cantidad}`}&nbsp;&nbsp;</Text>
											{/* <img style={{ maxWidth: '1.5rem' }} src={profits} alt='profits' /> */}
											<Button
												style={{ margin: '0px 0px' }}
												variant='subtle'
												color='dark'
												radius='sm'
												size=''
												compact
												onClick={() => handlerClickBorrar(p.nombre)}>
												<img style={{ maxWidth: '1.5rem' }} src={deleteI} alt='deleteI' />
											</Button>
										</Group>
									</Paper>
								))
							) : (
								<div>
									<Text className={classes.description} mt='sm' mb={30} size='lg' weight={550}>
										Tu Carrito Está Vacío &nbsp;
										{/* <img style={{ maxWidth: '1.5rem', top: '10px' }} src={sad} alt='sad' />. */}
									</Text>
									<Text className={classes.description} mt='sm' mb={30} size='lg' weight={550}>
										¡Llenalo y empezá la fiesta! &nbsp;
										{/* <img style={{ maxWidth: '1.5rem', top: '10px' }} src={confetti} alt='confetti' /> */}
									</Text>
								</div>
							)}
						</List>
						<br />
						{carro.length ? (
							<Paper radius='sm' withBorder className={classes.card} mt={ICON_SIZE / 3}>
								<ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
									<img
										style={{ maxWidth: '1.5rem', top: '10px' }}
										src={money}
										alt='money'
										size={34}
										stroke={1.5}
									/>
								</ThemeIcon>

								<Text align='center' weight={700} className={classes.title}>
									Total:
								</Text>
								<Text color='white' align='center' size='sm'>
									<Badge
										size='xl'
										variant='gradient'
										gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
										style={{ marginTop: '1rem' }}>
										$ {Total}
									</Badge>
								</Text>
							</Paper>
						) : null}
					</div>
					<div className={classes.form}>
						<Text align='center' size='lg' weight={700} color='dark' className={classes.title2}>
							Tus Datos
						</Text>
						<br />
						<TextInput
							label='Nombre'
							placeholder='Leo Messi'
							required
							error={errors.nombre}
							mt='md'
							value={cliente.nombre}
							name='nombre'
							onChange={(e) => handleChange(e)}
							classNames={{ input: classes.input, label: classes.inputLabel }}
						/>
						{/* {errors.nombre && <p style={{ color: 'red', fontSize: '10px'}}>{errors.nombre}</p>} */}
						{checked === true ? (
							<></>
						) : (
							<TextInput
								label='Dirección'
								placeholder='¿Dónde es la fiesta? ¿Dpto, piso?'
								required
								error={errors.direccion}
								value={cliente.direccion}
								name='direccion'
								onChange={(e) => handleChange(e)}
								classNames={{ input: classes.input, label: classes.inputLabel }}
							/>
						)}
						<Checkbox
							label='Retiro por el local'
							/* icon={IconMotorbike} */
							color='red'
							style={{ margin: '5px 0px' }}
							checked={checked}
							onChange={(e) => handleCheckbox(e)}
						/>
						{/* {errors.direccion && <p style={{ color: 'red', fontSize: '10px'}}>{errors.direccion}</p>} */}
						<Select
							label='Medio de pago'
							placeholder='Seleccionar'
							required
							data={['Efectivo', 'Transferencia', 'Tarjeta (+ 8%)']}
							error={errors.metodoPago}
							onChange={(e) => handleSelect(e)}
							/* classNames={classes} */
							/* style={{ marginTop: 20, zIndex: 2 }} */
						/>
						{cliente.metodoPago === 'Efectivo' ? (
							<NumberInput
								label='Abona con'
								placeholder='$'
								type='number'
								hideControls
								value={cliente.abonaCon}
								onChange={(e) => handleChangeAbona(e)}
								classNames={{ input: classes.input, label: classes.inputLabel }}
							/>
						) : (
							<br />
						)}
						{/* {errors.abonaCon && <p style={{ color: 'red', fontSize: '11px'}}>{errors.abonaCon}</p>} */}
						{/* {errors.metodoPago && <p style={{ color: 'red', fontSize: '10px'}}>{errors.metodoPago}</p>} */}
						<Textarea
							label='Comentario'
							placeholder='¿Necesitas aclarar algo?'
							minRows={4}
							mt='md'
							value={cliente.comentario}
							name='comentario'
							onChange={(e) => handleChange(e)}
							classNames={{ input: classes.input, label: classes.inputLabel }}
						/>

						<Group position='right' mt='md'>
							<Button
								className={classes.control}
								variant='gradient'
								gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}
								onClick={handlerClick}
								disabled={
									!cliente.nombre || !cliente.direccion || !cliente.metodoPago || carro.length === 0
								}>
								¡ Pedílo !
							</Button>
						</Group>
					</div>
				</SimpleGrid>
			) : (
				<div>
					<Text className={classes.description} mt='sm' mb={30} size='lg' weight={700}>
						Previateca se encuentra cerrado.
					</Text>
					<Text className={classes.description} mt='sm' mb={30} size='lg' weight={500}>
						Te esperamos a partir las 18:00hs 🍻
					</Text>
				</div>
			)}
		</div>
	);
}
