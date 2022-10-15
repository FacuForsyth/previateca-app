import { Card, Text, SimpleGrid, UnstyledButton, Group } from '@mantine/core';
import useStyles from '../css/TopContainerCSS.js';
import categorias from './categorias';
import scrollToTargetAdjusted from './scrollToTargetAdjusted.jsx';

export default function TopContainer() {
	// eslint-disable-next-line no-unused-vars
	const { classes, theme } = useStyles();

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
