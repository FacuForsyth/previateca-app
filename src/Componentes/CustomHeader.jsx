import { Burger, Button, Header, MediaQuery, useMantineTheme } from '@mantine/core';
import React from 'react';
import imgPrev from '../images/Previateca-logo-tipografia.png';

function CustomHeader({ opened, setOpened }) {
	const theme = useMantineTheme();
	function scrollToTargetAdjusted(id) {
		var element = document.getElementById(id);
		var headerOffset = 45;
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
					<img src={imgPrev} alt='' width='200px' />
					<Button variant='subtle' color='dark' onClick={() => scrollToTargetAdjusted('Carrito')}>
						🛒 Carrito
					</Button>
				</div>
			</div>
		</Header>
	);
}

export default CustomHeader;
