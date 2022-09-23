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
  var carro = useSelector((state)=> state.carrito);
  var carro2 = carritoConProductos(); 
  useEffect(()=> {
    dispatch(carritoConProductos());
    console.log(carro2)
  }, [dispatch])

  function handlerClick(){

    //const orderTime = '🕐 *Hora del pedido:* ' + now.getHours() + 'hs' + now.getMinutes() + '\n'
    /* cart.forEach(function(product){
      orderDetails = orderDetails + '\n' + product.qt + 'x ' + product.category + ' > ' + product.name
    }) */ 
    //const orderDetails = "🍕🥤 *Detalle del pedido:*"
    //orderTotal = "💲*Total:* " + total + ' .ARS\n'
    //b2cConfirmation = '\n\n\n 👍 Perfecto, Gracias por tu pedido. Lo confirmamos en un momento... \n\n ♨️ Pizza Linda ♨️' 

    //const text = `🛵Dirección: ${cliente.direccion} Cliente: ${cliente.nombre} Método de pago: ${cliente.metodo} Abona con: ${cliente.pago} Comentario: ${cliente.comentario} 🍕🥤Detalle del pedido: ${orderDetails} 💲*Total: ${carrito.total} 👍Perfecto, Gracias por tu pedido. Lo confirmamos en un momento... \n\n ♨️ Previateca ♨️`;

    const text = "2213123x Martini $10"

    var link = `https://wa.me/543874153451?text=${text}&lang=es`

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent)) {
      link = `whatsapp://send?phone=543874153451&text=${text}&lang=es`
      window.location.href =  link
    } else {
      window.location.href =  link
    }
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        
        <InputsCarrito />

        <div className={classes.controls}>
          <TextInput
            placeholder="Algun comentartio..."
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button variant="gradient" gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }} onClick={handlerClick}>Enviar mi pedido</Button>
        </div>
      </div>

      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
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
