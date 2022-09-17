import { createStyles, Card, Text, SimpleGrid, UnstyledButton, Anchor, Group } from '@mantine/core';
import {
	IconCreditCard,
	IconBuildingBank,
	IconRepeat,
	IconReceiptRefund,
	IconReceipt,
	IconReceiptTax,
	IconReport,
	IconCashBanknote,
	IconCoin,
} from '@tabler/icons';

const mockdata = [
	{ title: 'PROMOS', icon: IconCreditCard, color: 'violet' },
	{ title: 'Aperitivos', icon: IconBuildingBank, color: 'indigo' },
	{ title: 'Cervezas', icon: IconRepeat, color: 'blue' },
	{ title: 'Vodkas', icon: IconReceiptRefund, color: 'green' },
	{ title: 'Vinos tintos', icon: IconReceipt, color: 'teal' },
	{ title: 'Vinos blancos', icon: IconReceiptTax, color: 'cyan' },
	{ title: 'Gaseosas', icon: IconReport, color: 'pink' },
	{ title: 'Champagnes', icon: IconCoin, color: 'red' },
	{ title: 'Gin / Ron / Tequila', icon: IconCashBanknote, color: 'orange' },
	{ title: 'Energizantes', icon: IconCashBanknote, color: 'grape' },
	{ title: 'Jugos', icon: IconCashBanknote, color: 'lime' },
	{ title: 'Cigarrillos', icon: IconCashBanknote, color: 'yellow' },
];

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.yellow[5],
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

	const items = mockdata.map((item) => (
		<UnstyledButton key={item.title} className={classes.item}>
			<item.icon color={theme.colors[item.color][6]} size={32} />
			<Text size='xs' mt={7}>
				{item.title}
			</Text>
		</UnstyledButton>
	));

	return (
		<Card withBorder radius='md' className={classes.card}>
			<Group position='apart'>
				<Text className={classes.title}>Services</Text>
				<Anchor size='xs' color='dimmed' sx={{ lineHeight: 1 }}>
					+ 21 other services
				</Anchor>
			</Group>
			<SimpleGrid cols={3} mt='md'>
				{items}
			</SimpleGrid>
		</Card>
	);
}
