const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type:  'number',
                        demandOption: true,
                        description: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'list',
                        default: false,
                        type: 'boolean',
                        description: 'Muestra la tabla en consola'
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        description: 'Indica hasta donde va a llegar la tabla de multiplicar'
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
