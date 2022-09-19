import React from 'react';
import { createStyles, Select, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function InputsCarrito() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div>
      <TextInput 
        label="Ingresa tu nombre" 
        placeholder="Nombre..." 
        classNames={classes} 
      />
      
      <TextInput
        label="Ingresa la direccion" 
        placeholder="Direccion..." 
        classNames={classes} 
        style={{ marginTop: 20, zIndex: 2 }} 
      />
      {/* CHECKBOX RETIRAR PEDIDO POR EL LOCAL Y SE DESAPARECE EL TEXT DE ARRIBA */}

      <TextInput 
        label="Abono con $" 
        placeholder="$" 
        type="number" 
        classNames={classes} 
        style={{ marginTop: 20, zIndex: 2 }} 
      />
      {/* CHECKBOX PARA TRANSFERENCIA Y TARJETA (+ 8%) Y DESAPARECE EL DE ARRIBA */}

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['Efectivo', 'Transferencia', 'Tarjeta (+ 8%)']}
        placeholder="Seleccionar"
        label="Medio de pago"
        classNames={classes}
      />
    </div>
  );
}