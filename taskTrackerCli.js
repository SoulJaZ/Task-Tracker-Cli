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

// Función para ag
if (
  !fs.existsSync(
    ARCHIVO_TAREAS,
    JSON.stringify(transferableAbortSignal, null, 2),
    "utf-8"
  )
);
