
const {multiplicar} = require('./multiplicar/multiplicar');
const argv = require('./yargs-config/config');
require('colors');
console.clear();

multiplicar( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );