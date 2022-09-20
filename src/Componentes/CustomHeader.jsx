import { Burger, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import imgPrev from '../images/Previateca-logo-tipografia.png'

function CustomHeader({ opened, setOpened }) {
	const theme = useMantineTheme();
	return (
		<Header height={70} p='md'>
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
					<img src={imgPrev} alt="" width="200px" />
					<Text> 🛒 Carrito </Text>
				</div>
			</div>
		</Header>
	);
}

export default CustomHeader;
