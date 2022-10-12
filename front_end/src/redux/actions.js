export function agregarCarrito(carro) {
	return {
		type: 'CARRITO',
		payload: carro,
	};
}

export function carritoConProductos() {
	return {
		type: 'CARROS',
	};
}

export function restarProducto(nombre) {
	return {
		type: 'RESTAR_P',
		payload: nombre,
	};
}
export function sumarProducto(nombre) {
	return {
		type: 'SUMAR_P',
		payload: nombre,
	};
}
export function borrarProducto(nombre) {
	return {
		type: 'BORRAR',
		payload: nombre,
	};
}