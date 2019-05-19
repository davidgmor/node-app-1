const opts = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multplicar', opts)
    .command('crear', 'Crea un nuevo fichero con una tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}