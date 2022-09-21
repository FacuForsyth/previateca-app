/* eslint-disable no-unused-vars */
import React from "react";
import { createStyles, Text, Title, TextInput, Button } from '@mantine/core';
import InputsCarrito from "./InptusCarrito";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export default function BannerCarrito() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        
        <InputsCarrito />

        <div className={classes.controls}>
          <TextInput
            placeholder="Algun comentartio..."
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button variant="gradient" gradient={{ from: '#ff4f5e', to: '#ff4f78', deg: 106 }}>Enviar mi pedido</Button>
        </div>
      </div>
      LISTA DE PRODUCTOS SELECCIONADOS
      CARRITO
      {/*LISTA DE PRODUCTOS CARRITO <Image src={image.src} className={classes.image} /> */}
    </div>
  );
}