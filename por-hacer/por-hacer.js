const fs = require('fs');
const { resolve } = require('path');
const { demand } = require('yargs');

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    //METODO JSON.STRINGIFY SE USA PARA QUE PUEDA LEER JSON.
    //LEER MAS AL RESPECTO.

    fs.writeFile('./data-base/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo Guardar', err);
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../data-base/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDB();


    let porHacer = {

        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}



let getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion
        })
        //BUSCA EL INDEX SI LA DESCRIPCION DE MI ARRAY ES IGUAL A LA DESCRIPCION QUE DA EL USUARIO.

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;

    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevolistado = listadoPorHacer.filter(c => c.descripcion !== descripcion)


    if (nuevolistado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevolistado
        guardarDB();
        return true;
    }




}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}