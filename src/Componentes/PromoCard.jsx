import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function PromoCard({ nombre, imagen, precio, categoria, key, id }) {
	return (
		<Card shadow='sm' p='lg' radius='md' withBorder>
			<Card.Section component='a' href='https://mantine.dev/'>
				<Image src={imagen} alt={nombre} width='100%' height={250} fit='contain' />
			</Card.Section>

			<Group position='apart' mt='md' mb='xs'>
				<Text weight={500}>{nombre}</Text>
				<Badge color='pink' variant='light'>
					¡PROMO!
				</Badge>
			</Group>

			<Text size='sm' color='dimmed'>
				${precio}
			</Text>
			<Button variant='light' color='blue' fullWidth mt='md' radius='md'>
				Comprar
			</Button>
		</Card>
	);
}

export default PromoCard;
