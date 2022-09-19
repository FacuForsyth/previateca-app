import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';

import productos from '../Productos/promos.js';
import PromoCard from './PromoCard.jsx';
import { useMantineTheme } from '@mantine/core';

export default function CustomCarousel() {
	const theme = useMantineTheme();

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
					height: 4,
					backgroundColor: theme.colors.cyan[4],
					transition: 'width 250ms ease',
					'&[data-active]': {
						width: 40,
					},
				},
			}}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}>
			{productos?.map((prod) => {
				return (
					<Carousel.Slide key={prod.id}>
						<PromoCard
							nombre={prod.nombre}
							imagen={prod.imagen}
							precio={prod.precio}
							categoria={prod.categoria}
							id={prod.id}
						/>
					</Carousel.Slide>
				);
			})}
		</Carousel>
	);
}
/* 
plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
*/
