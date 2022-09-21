export function agregarCarrito(carro){
  return{
      type: 'CARRITO',
      payload: carro
  }
};