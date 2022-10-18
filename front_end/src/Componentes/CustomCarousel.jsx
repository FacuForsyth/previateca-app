import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import PromoCard from './PromoCard.jsx';
import { useMantineTheme } from '@mantine/core';
import { urlFor } from '../client';

export default function CustomCarousel({ globalCart, promos }) {
	const theme = useMantineTheme();
	const productos = promos;
	const autoplay = useRef(Autoplay({ delay: 4000 }));

	return (
		<Carousel
			withIndicators
			height={'100%'}
			slideSize='33.333333%'
			slideGap='md'
			breakpoints={[
				{ maxWidth: 'md', slideSize: '50%' },
				{ maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
			]}
			loop
			align='start'
			sx={{ maxWidth: '100%' }}
			mx='auto'
			styles={{
				indicator: {
					width: 12,
					height: 5,
					backgroundColor: theme.colors.pink[6],
					transition: 'width 250ms ease',
					'&[data-active]': {
						width: 40,
					},
					position: 'relative',
					bottom: '-25px',
				},
			}}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}>
			{productos.length > 1 ? (
				productos.map((prod) => {
					return (
						<Carousel.Slide key={prod._id} style={{ marginBottom: '10px' }}>
							<PromoCard
								nombre={prod.nombre}
								imagen={urlFor(prod.imagen)}
								precio={prod.precio}
								categoria={prod.categoria}
								id={prod.id}
								globalCart={globalCart}
							/>
						</Carousel.Slide>
					);
				})
			) : (
				<Carousel.Slide key='Loading' style={{ marginBottom: '10px' }}></Carousel.Slide>
			)}
		</Carousel>
	);
}
/* 
plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
*/
