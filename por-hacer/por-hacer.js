const fs = require('fs');

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer)

  fs.writeFile('db/data.json', data, 'utf8', (err) => {
    if (err) throw new Error('No se pudo guardar');
  })

  //console.log(data, '**guardarDB**')
}

const cargarDB = () => {

  try {
    listadoPorHacer = require('../db/data.json');
  } catch (err) {
    listadoPorHacer = []
  }

  //console.log(listadoPorHacer, '**cargarDB()**')

}

let listadoPorHacer = []

const crear = (descripcion) => {

  cargarDB()

  let porHacer = {
    descripcion: descripcion,
    completado: false
  }

  listadoPorHacer.push(porHacer)

  //console.log(listadoPorHacer, '**listadoPorHacer**')

  guardarDB()

  return porHacer
}

let getListado = () => {
  cargarDB()
  return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

  cargarDB()

  let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion)


  if (index >= 0) {
    listadoPorHacer[index].completado = completado
    guardarDB()
    return true
  } else {
    return false
  }

}

const borrar = (descripcion) => {

  cargarDB()

  let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion)

  if (index >= 0) {
    listadoPorHacer.splice([index], 1)
    guardarDB()
    return true
  } else {
    return false
  }

}


module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};