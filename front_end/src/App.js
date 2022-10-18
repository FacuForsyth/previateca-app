import { useEffect, useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import MainContainer from './Componentes/MainContainer.jsx';
import TopContainer from './Componentes/TopContainer';
import CustomNavbar from './Componentes/CustomNavbar.tsx';
import CustomFooter from './Componentes/Footer';
import CustomHeader from './Componentes/CustomHeader';
import BannerCarrito from './Componentes/BannerCarrito';
import CustomCarousel from './Componentes/CustomCarousel.jsx';
import { useSelector } from 'react-redux';
import useStyles from './AppCSS';
import { client } from './client';

export default function App() {
	const { classes } = useStyles();
	const theme = useMantineTheme();

	const [opened, setOpened] = useState(false);
	let globalCart = useSelector((state) => state.carrito);

	//	SANITY BACK END -----------------------------------
	const [promos, setpromos] = useState([]);
	const [aperitivos, setaperitivos] = useState([]);
	const [cervezas, setcervezas] = useState([]);
	const [vodkas, setvodkas] = useState([]);
	const [tintos, settintos] = useState([]);
	const [blancos, setblancos] = useState([]);
	const [gaseosas, setgaseosas] = useState([]);
	const [champagnes, setchampagnes] = useState([]);
	const [gin_ron, setgin_ron] = useState([]);
	const [energizantes, setenergizantes] = useState([]);
	const [jugos, setjugos] = useState([]);
	const [cigarrillos, setcigarrillos] = useState([]);
	const [hielo_vasos, sethielo_vasos] = useState([]);

	useEffect(() => {
		const prom = '*[_type == "promos"]';
		client.fetch(prom).then((data) => setpromos(data));
		const aper = '*[_type == "aperitivos"]';
		client.fetch(aper).then((data) => setaperitivos(data));
		const cerv = '*[_type == "cervezas"]';
		client.fetch(cerv).then((data) => setcervezas(data));
		const vodk = '*[_type == "vodkas"]';
		client.fetch(vodk).then((data) => setvodkas(data));
		const tint = '*[_type == "tintos"]';
		client.fetch(tint).then((data) => settintos(data));
		const blanc = '*[_type == "blancos"]';
		client.fetch(blanc).then((data) => setblancos(data));
		const gase = '*[_type == "gaseosas"]';
		client.fetch(gase).then((data) => setgaseosas(data));
		const cham = '*[_type == "champagnes"]';
		client.fetch(cham).then((data) => setchampagnes(data));
		const gin_ = '*[_type == "gin_ron"]';
		client.fetch(gin_).then((data) => setgin_ron(data));
		const ener = '*[_type == "energizantes"]';
		client.fetch(ener).then((data) => setenergizantes(data));
		const jugo = '*[_type == "jugos"]';
		client.fetch(jugo).then((data) => setjugos(data));
		const ciga = '*[_type == "cigarrillos"]';
		client.fetch(ciga).then((data) => setcigarrillos(data));
		const hiel = '*[_type == "hielo_vasos"]';
		client.fetch(hiel).then((data) => sethielo_vasos(data));
	}, []);

	const productos = promos.concat(
		aperitivos,
		blancos,
		cervezas,
		champagnes,
		cigarrillos,
		energizantes,
		gaseosas,
		gin_ron,
		hielo_vasos,
		jugos,
		tintos,
		vodkas
	);
	// END OF SANITY BACK END --------------------

	return (
		<AppShell
			className={classes.AppShell}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			navbar={<CustomNavbar opened={opened} setOpened={setOpened} />}
			footer={<CustomFooter opened={opened} setOpened={setOpened} />}
			header={<CustomHeader theme={theme} opened={opened} setOpened={setOpened} />}>
			<Toaster
				containerStyle={{
					top: 75,
				}}
			/>
			<TopContainer />
			<br />
			<CustomCarousel globalCart={globalCart} promos={promos} />
			<br />
			<MainContainer globalCart={globalCart} productos={productos} />
			<BannerCarrito />
		</AppShell>
	);
}
