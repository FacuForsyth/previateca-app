import React from 'react'; //DemoNavbar
import { useState } from 'react';
import { createStyles, Navbar, Group, Code, Button, ScrollArea, UnstyledButton } from '@mantine/core';


import categorias from '../Componentes/categorias';
import imgHielo from '../icons/ice-cubes.png';

//import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('icon');
	return {
		header: {
			paddingBottom: theme.spacing.md,
			marginBottom: theme.spacing.md * 1.5,
			borderBottom: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
			}`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: `1px solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
			}`,
		},

		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: theme.colorScheme === 'dark' ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			'&, &:hover': {
				backgroundColor: theme.fn.variant({ variant: 'light', color: theme.colors.pink[2] }).background,
				color: theme.fn.variant({ variant: 'light', color: theme.colors.pink[2] }).color,
				[`& .${icon}`]: {
					color: theme.fn.variant({ variant: 'light', color: theme.colors.red[2] }).color,
				},
			},
		},
	};
});

let catego = categorias.concat({ title: 'Hielo / Vasos', img: imgHielo });

const data = catego.map((cat) => ({ link: cat.title, label: cat.title, icon: cat.img }));

function scrollToTargetAdjusted(id) {
	var element = document.getElementById(id);
	var headerOffset = 72;
	var elementPosition = element ? element.getBoundingClientRect().top : 0;
	var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
}

export default function DemoNavbar({ opened, setOpened }) {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState('Billing');

	const links = data.map((item) => (
		<UnstyledButton
			key={item.label}
			className={cx(classes.link, { [classes.linkActive]: item.label === active })}
			onClick={() => {
				setOpened(!opened);
				scrollToTargetAdjusted(item.label);
			}}>
			<img src={item.icon} alt='' width='32px' className={classes.linkIcon} stroke={1.5} />

			<span>{item.label}</span>
		</UnstyledButton>
	));

	return (
		<Navbar height='100%' width={{ sm: 300 }} p='md' hidden={!opened}>
			<Navbar.Section grow component={ScrollArea} mx='-xs' px='xs'>
				<Group className={classes.header} position='apart'>
					LOGO
					<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
				</Group>
				{links}
			</Navbar.Section>

			{/* <Navbar.Section className={classes.footer}>
				<a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
					<IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
					<span>Change account</span>
				</a>

				<a href='#' className={classes.link} onClick={(event) => event.preventDefault()}>
					<IconLogout className={classes.linkIcon} stroke={1.5} />
					<span>Logout</span>
				</a>
			</Navbar.Section> */}
		</Navbar>
	);
}
