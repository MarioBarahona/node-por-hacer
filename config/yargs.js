const descripcion = {
  alias: 'd',
  demand: true,
  desc: 'descripcion de la tarea por hacer'
}

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('crear', 'crear un elemento por hacer', {
    descripcion
  })
  .command('actualizar', 'actualiza el estado completo de una tarea', {
    descripcion,
    completado,
  })
  .command('borrar', 'borrar una tarea por hacer', {
    descripcion
  })
  .help()
  .argv



module.exports = {
  argv
};