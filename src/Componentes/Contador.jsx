import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

export default function Contador() {
  const [count, handlers] = useCounter(0, { min: 0, max: 12 });

  return (
    <>
      <Group position="center">
        <Button onClick={handlers.decrement}>-</Button>
        <Text>{count}</Text>
        <Button onClick={handlers.increment}>+</Button>
      </Group>
    </>
  );
}