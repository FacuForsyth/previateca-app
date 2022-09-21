/* eslint-disable react-hooks/rules-of-hooks */
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text } from '@mantine/core';
import React from 'react';

const arreglo = ['1', '2', '3', '4'];

function Demo() {
	return (
		<>
			{arreglo.map((arr) => {
				const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 5 });
				return (
					<>
						<Button onClick={() => scrollIntoView({ alignment: 'center' })}>Boton {arr}</Button>
						<div style={{ height: '20vh' }} />
						<Text ref={targetRef}>{arr}º TEXTO</Text>
						<div style={{ height: '20vh' }} />
					</>
				);
			})}
		</>
	);
}
export default Demo;
