export default {
	name: 'energizantes',
	title: 'Energizantes',
	type: 'document',
	fields: [
		{
			name: 'nombre',
			title: 'Nombre',
			type: 'string',
		},
		{
			name: 'precio',
			title: 'Precio',
			type: 'number',
		},
		{
			name: 'disponible',
			title: 'Disponible',
			type: 'boolean',
		},
		{
			name: 'categoria',
			title: 'Categoria',
			type: 'string',
		},
		{
			name: 'imagen',
			title: 'Imagen',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
