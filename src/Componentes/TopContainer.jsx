import { Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import useStyles from '../css/TopContainerCSS.js';
import categorias from './categorias';

export default function TopContainer() {
	// eslint-disable-next-line no-unused-vars
	const { classes, theme } = useStyles();

	function scrollToTargetAdjusted(id) {
		var element = document.getElementById(id);
		var headerOffset = 72;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}

	const items = categorias.map((item) => (
		<UnstyledButton
			key={item.title}
			className={classes.item}
			onClick={() => scrollToTargetAdjusted(item.title)}>
			<img src={item.img} alt={item.title} width='32px' />
			<Text size='xs' mt={7}>
				{item.title}
			</Text>
		</UnstyledButton>
	));

	return (
		<Card withBorder radius='sm' className={classes.card}>
			{/* <Group position='apart'>
				<Text className={classes.title}>Categorias</Text>
				{/* <Anchor size='xs' color='dimmed' sx={{ lineHeight: 1 }}>
					+ 21 other services
				</Anchor> */}
			</Group> */}
			<SimpleGrid
				cols={3}
				mt='xs'
				className={classes.grid}
				breakpoints={[
					{ minWidth: 980, cols: 4, spacing: 'xl' },
					{ minWidth: 1200, cols: 6, spacing: 'xl' },
				]}>
				{items}
			</SimpleGrid>
		</Card>
	);
}
