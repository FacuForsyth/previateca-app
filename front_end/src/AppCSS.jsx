import { createStyles } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
	AppShell: {
		main: {
			//background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#fffffc',

			// Para pantallas grandes
			[`@media (max-width: ${theme.breakpoints.xs}px)`]: {},
			'@media (min-width: 800px)': {
				paddingRight: '2.5rem',
			},
			// Para pantallas chicas, y sin usar modelos predeterminados
			'@media (max-width: 800px)': {
				paddingLeft: '0.5rem',
				paddingRight: '1rem',
			},
		},
	},
}));

export default useStyles;
