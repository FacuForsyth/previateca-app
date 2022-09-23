const initialState = {
	carrito: [], //arreglo que renderizo
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'CARRITO':
			//console.log(state); //si llega con nuevos prod
			console.log('🟢 EstadoGlobal: ', {
				...state,
				carrito: [...state.carrito, action.payload],
			});
			return {
				...state,
				carrito: [...state.carrito, action.payload],
			};
		case 'RESTAR_P':
			for (const producto of state.carrito) {
				if (producto.nombre === action.payload) {
					if (producto.cantidad > 1) producto.cantidad--;
					else state.carrito = state.carrito.filter((producto) => producto.nombre !== action.payload);
				}
			}
			return {
				...state,
				carrito: [...state.carrito],
			};
		case 'SUMAR_P':
			for (const producto of state.carrito) {
				if (producto.nombre === action.payload) producto.cantidad++;
			}
			return {
				...state,
				carrito: [...state.carrito],
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
