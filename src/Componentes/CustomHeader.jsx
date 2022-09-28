import { Badge, Burger, Button, Header, MediaQuery, useMantineTheme } from '@mantine/core';
import React from 'react';
import imgPrev from '../images/Previateca-logo-tipografia.png';
import shopping_cart from '../icons/shopping_cart.png';
import { useSelector } from 'react-redux';
import Fireworks from './Fireworks.tsx';

function CustomHeader({ opened, setOpened }) {
	const theme = useMantineTheme();
	var carro = useSelector((state) => state.carrito);
	let cantidad = carro.length;

	function scrollToTargetAdjusted(id) {
		var element = document.getElementById(id);
		var headerOffset = 71;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
	return (
		<Header height={70} p='md' style={{ overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
				}}>
				<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o) => !o)}
						size='sm'
						color={theme.colors.gray[6]}
						mr='xl'
					/>
				</MediaQuery>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between ',
						alignItems: 'center',
						height: '100%',
						width: '100%',
						marginLeft: '-10px',
					}}>
					<img src={imgPrev} alt='logo' width='200px' />
					<Button
						variant='subtle'
						color='dark'
						onClick={() => {
							if (cantidad) Fireworks();
							scrollToTargetAdjusted('Carrito');
							if (opened) setOpened((o) => !o);
						}}>
						<img src={shopping_cart} alt='shopping_cart' style={{ maxWidth: '30px', bottom: '-30px' }} />
						{cantidad ? (
							<Badge
								size='sm'
								variant='filled'
								style={{ backgroundColor: '#ff4f78', position: 'absolute', top: '-5px', left: '35px' }}>
								{cantidad}
							</Badge>
						) : null}
					</Button>
				</div>
			</div>
		</Header>
	);
}

export default CustomHeader;
