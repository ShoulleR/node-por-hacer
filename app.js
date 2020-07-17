const argv = require('./Config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tareas of listado) {

            console.log('======por Hacer======='.green);
            console.log(tareas.descripcion);
            console.log('Estado:  ', tareas.completado);
            console.log('====================='.green);

        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');
        break;
}