import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
	card: {
		backgroundImage: `linear-gradient(-60deg, #ff4f5e 0%, #ff4f78 100%)`,
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
	},

	item: {
		marginRight: '-7px',
		marginLeft: '-7px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		borderRadius: theme.radius.sm,
		height: 90,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		transition: 'box-shadow 150ms ease, transform 100ms ease',

		'&:hover': {
			boxShadow: `${theme.shadows.md} !important`,
			transform: 'scale(1.05)',
		},
	},
}));
export default useStyles;
