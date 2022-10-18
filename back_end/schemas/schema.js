// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import promos from './promos';
import aperitivos from './aperitivos';
import blancos from './blancos';
import cervezas from './cervezas';
import champagnes from './champagnes';
import cigarrillos from './cigarrillos';
import energizantes from './energizantes';
import gaseosas from './gaseosas';
import gin_ron from './gin_ron';
import vodkas from './vodkas';
import tintos from './tintos';
import jugos from './jugos';
import hielo_vasos from './hielo_vasos';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		promos,
		aperitivos,
		cervezas,
		vodkas,
		tintos,
		blancos,
		gaseosas,
		champagnes,
		gin_ron,
		energizantes,
		jugos,
		cigarrillos,
		hielo_vasos,
	]),
});
