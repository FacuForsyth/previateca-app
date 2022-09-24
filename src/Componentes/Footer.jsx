import React from 'react';
import { Button, Footer } from '@mantine/core';
import alarm from '../icons/alarm_clock.png';
import arrow from '../icons/up_arrow.png';

function CustomFooter() {
	return (
		<Footer
			height={20}
			p='md'
			style={{
				backgroundColor: '#EDF2FF',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<img src={alarm} alt='alarm' width='25px' c stroke={1.5} />
			<h5 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>
				MARTES A DOMINGOS
				<br />
				DE 18:00 a 00:30
			</h5>
			<Button
				variant='subtle'
				color='dark'
				size='md'
				onClick={() =>
					window.scrollTo({
						top: 0,
						behavior: 'smooth',
					})
				}>
				<img src={arrow} alt='arrow' width='32px' c stroke={1.5} />
			</Button>
		</Footer>
	);
}

export default CustomFooter;
