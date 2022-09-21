const initialState = {
  carrito: [], //arreglo que renderizo
};

function rootReducer(state = initialState, action){
  switch (action.type) {
    case 'CARRITO': 
    //console.log(state)
    return {
      ...state,
        carrito: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;