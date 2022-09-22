const initialState = {
  carrito: [{
    nombre: "",
    cantidad: "",
  }], //arreglo que renderizo
};

function rootReducer(state = initialState, action){
  switch (action.type) {
    case 'CARRITO': 
    //console.log(state) //si llega con nuevos prod
      return {
        ...state,
        carrito: action.payload,
       };

    case 'CARROS':
      const carro2 = state.carrito;
      return {
      ...state,
        carrito: carro2,
      };

    default:
      return state;
  }
}

export default rootReducer;