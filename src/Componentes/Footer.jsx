import React from 'react';
import { Button, Footer } from '@mantine/core';
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
			<h3 style={{ margin: '0px', padding: '0px' }}>Que disfrutes tu pedido, salud! 🍾 </h3>
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
				<h2>🔝</h2>
			</Button>
		</Footer>
	);
}

export default CustomFooter;
