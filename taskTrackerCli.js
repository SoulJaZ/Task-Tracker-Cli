const fs = require("fs");
const path = require("path");

// Crear dirección del arhivo que consimira los recursos para ejecutar la aplicación.
const ARCHIVO_TAREAS = path.join(__dirname, "tareas.json");

// Función para cargar tareas desde el archivo JSON.
function cargarTareas() {
  // Condicional que verifica si no es verdadero que existe alguna tarea en el archivo JSON.
  if (!fs.existsSync(ARCHIVO_TAREAS)) {
    return [];
  } else {
    return JSON.parse(fs.readFileSync(ARCHIVO_TAREAS, "utf-8"));
  }
}

// Función para guardar tareas en el archivo JSON.
function guardarTareas(tareas) {
  // Instrucción que a través del método 'writeFileSync' del objeto 'fs', se guardan las tareas en el archivo JSON.
  fs.writeFileSync(ARCHIVO_TAREAS, JSON.stringify(tareas, null, 2), "utf-8");
}

// Función para agregar una+ nueva tarea.
function agregarTareas(descripcion) {

    let tareas = guardarTareas(); // Variable que almacena las tareas y las relaciona a través del método 'guardarTarea'
    let nuevaTarea = {
        id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
        description: descripcion,
        status: 'todo', // Estado inicial de la tarea.
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString()
    };
    tareas.push(nuevaTarea);     // Agregar la 'nuevaTarea' al arreglo de tareas a través del método push.
    guardarTareas(tareas); // Instanciar el método 'guardarTareas' y pasarle como argumento la nueva tarea.
    console.log(`Tarea agregada exitosamente (ID: ${nuevaTarea.id})`);
}

// Función para actualizar la descripción de una tatea existente
function actualizarTarea(id, nuevaDescripcion) {
    
    let tareas = cargarTareas(); // Variable que almacena las tareas y las relaciona a través del método 'cargarTarea'
    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].id === id) {
            tareas[index].descripcion = nuevaDescripcion;
            tareas[index].updateAt = new Date().toISOString();
            guardarTareas(tareas) // Instanciar el método 'guardarTareas' con la variable 'tareas' como argumento.
            console.log(`Tarea actualizada exitosamente (ID: ${tareas[index].id})`);
        }
        
    }
}

// Función para eliminar una tarea por su ID.
function eliminarTarea(id) {
    
    let tareas = cargarTareas(); // Variable que almacena las tareas y las relaciona a través del método 'cargarTarea'.
    let filtradorTareas = [] // Arreglo que representa y almacena la data de la busqueda de la tarea.

    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].id !== id) {
            filtradorTareas.push(tareas[index]);
        }        
    }
    console.log(`Tarea eliminada exitosamente (ID: ${tareas[index].id})`);
}

// Función paa cambiar el estado de una tarea. 
function cambiarEstadoTarea(id, status) {
    let tareas = cargarTareas(); // Variable que almacena las tareas y las relaciona a través del método 'cargarTarea'.

    for (let index = 0; index < tareas.length; index++) { // Recorre el arreglo de tareas
        if (tareas[index].id === id) { // Condición que verifica la coincidencia de los id, entre el que está en el arreglo y el que se pasa como parámetro de busqueda. 
            tareas[index].status = status; // Actualizar valor del 'status' de la tarea. 
            tareas[index].updateAt = new Date().toISOString(); // Actualiza el valor Date de la variable 'updateAt'.
            guardarTareas(tareas); // Instanciar método 'guardarTareas', con tareas como argumento.
            console.log(`Estado de tarea maracada exitosamente ${status}`);
        }        
    }
}

// Función para listar las tareas según el estado. 
function listaTareas(status) {
    
    let tareas = cargarTareas();
    let filtradorTareas = [];

    for (let index = 0; index < tareas.length; index++) {
        if (!status || tareas[index].status === status) {
            filtradorTareas.push(tareas[index]);
        }        
    }
    console.log(filtradorTareas.length ? filtradorTareas : 'No hay tareas pendientes.');
}

// Manejo de la entrada de la línea de comandos.
const argumentos = process.argv.slice(2);
const comandos = argumentos[0];
const argumento1 = argumentos[1];
const argumento2 = argumentos.slice[2].join(' ');

if (comandos === 'agregar'){
    agregarTareas(argumento1);
}else if (comandos === 'actualizar'){
    actualizarTarea(parseInt(argumento1)(argumento2));
}else if (comandos === 'eliminar'){
    eliminarTarea(parseInt(argumento1));
}else if (comandos === 'cambiar-estado-tarea'){
    cambiarEstadoTarea(parseInt(argumento1), 'en-progreso');
}else if (comandos === 'marcar-hecho'){
    cambiarEstadoTarea(parseInt(argumento1), 'hecho');
}else if (comandos === 'lista'){
    listaTareas(argumento1);
}else {
    console.log("Comando inválido")
}
