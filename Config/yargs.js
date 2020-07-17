const descripcion = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}





const argv = require('yargs')
    .command('crear', 'Crea un Elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borrar un Elemento de DB', {
        descripcio
    })
    .help()
    .argv;




module.exports = {
    argv
}