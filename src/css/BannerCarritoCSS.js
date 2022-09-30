import { createStyles } from '@mantine/styles';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 400,
		boxSizing: 'border-box',
		/* backgroundImage: `linear-gradient(-60deg, #ff4f78 0%, #ff4f5e 100%)`, */
		backgroundColor: '#f8f9fa',
		borderRadius: theme.radius.sm,
		padding: theme.spacing.xl * 2.5,

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			padding: theme.spacing.xl * 0.5,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		display: 'flex',
		justifyContent: 'center',
		fontSize: '50px',
		fontWeight: '100',
		color: theme.black,
		lineHeight: 1,
	},
	title2: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		display: 'flex',
		justifyContent: 'center',
		fontSize: '50px',
		fontWeight: '900',
		color: theme.black,
		lineHeight: 1,
	},

	description: {
		//color: theme.colors[theme.primaryColor][0],
		maxWidth: 300,
		display: 'flex',
		justifyContent: 'center',
		color: theme.black,
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			maxWidth: '100%',
		},
	},

	form: {
		backgroundColor: theme.white,
		padding: theme.spacing.xl,
		borderRadius: theme.radius.sm,
		boxShadow: theme.shadows.lg,
	},

	social: {
		color: theme.white,

		'&:hover': {
			color: theme.colors[theme.primaryColor][1],
		},
	},

	input: {
		backgroundColor: theme.white,
		borderColor: theme.colors.gray[4],
		color: theme.black,

		'&::placeholder': {
			color: theme.colors.gray[5],
		},
	},

	inputLabel: {
		color: theme.black,
	},

	control: {
		backgroundColor: theme.colors[theme.primaryColor][6],
	},

	listaCompras: {
		minWidth: '100px !important',
		display: 'flex !important',
		flexDirection: 'column !important',
		//backgroundColor: 'pink',
	},
	card: {
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		position: 'relative',
		overflow: 'visible',
		padding: theme.spacing.xl,
		paddingTop: theme.spacing.xl * 0.6 + ICON_SIZE / 3,
		margin: '2rem 0rem',
	},

	icon: {
		backgroundColor: '#f6dee2',

		position: 'absolute',
		top: -ICON_SIZE / 3,
		left: `calc(50% - ${ICON_SIZE / 2}px)`,
	},

	cardTitle: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
}));

export { useStyles, ICON_SIZE };
