/* eslint-disable no-unused-vars */
import {
	createStyles,
	Card,
	Text,
	SimpleGrid,
	UnstyledButton,
	Anchor,
	Group,
	Button,
} from '@mantine/core';
import categorias from './categorias';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#ff4f5e',
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
	},

	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderRadius: theme.radius.md,
		height: 90,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		transition: 'box-shadow 150ms ease, transform 100ms ease',

		'&:hover': {
			boxShadow: `${theme.shadows.md} !important`,
			transform: 'scale(1.05)',
		},
	},
}));

export default function TopContainer() {
	const { classes, theme } = useStyles();

	/* 	ESTO FUNCIONA BIEN PERO NO ME SIRVE EL OFFSET */
	/* 	function scrollToTop(a) {
		console.log('🟢🟢🟢 SearchID: ', a);
		const element = document.getElementById(a);
		element?.scrollIntoView({ behavior: 'smooth', block: 'end', offset: 60 });
	} */
	function scrollToTargetAdjusted(id) {
		console.log('🟢 id:', id);
		var element = document.getElementById(id);
		var headerOffset = 72;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
		console.log('💥', window.pageYOffset);

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
			<img src={item.img} alt='' width='32px' />
			<Text size='xs' mt={7}>
				{item.title}
			</Text>
		</UnstyledButton>
	));

	return (
		<Card withBorder radius='md' className={classes.card}>
			{/* <Group position='apart'>
				<Text className={classes.title}>Services</Text>
				<Anchor size='xs' color='dimmed' sx={{ lineHeight: 1 }}>
					+ 21 other services
				</Anchor>
			</Group> */}
			<SimpleGrid cols={3} mt='md'>
				{items}
			</SimpleGrid>
		</Card>
	);
}
