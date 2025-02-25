Administrador de Tareas CLI

Este es un gestor de tareas simple basado en Node.js que permite agregar, actualizar, eliminar y listar tareas desde la línea de comandos.
Características

Agregar nuevas tareas
Listar todas las tareas o filtrarlas por estado
Actualizar la descripción de una tarea
Cambiar el estado de una tarea
Eliminar una tarea

Instalación
Clona el repositorio: 
git clone https://github.com/SoulJaZ/Task-Tracker-Cli/Task-Tracker-Cli.git
cd Task-Tracker-Cli

Tener Node.js instalado:
node -v

Uso
Agregar una tarea
node Task-Tracker-Cli.js agregar "Hacer la compra"

Listar todas las tareas
node Task-Tracker-Cli.js lista

Actualizar una tarea
node Task-Tracker-Cli.js actualizar 1 "Hacer la compra y cocinar"

Cambiar estado de una tarea
node Task-Tracker-Cli.js cambiar-estado-tarea 1 en-progreso
node Task-Tracker-Cli.js marcar-hecho 1

Eliminar una tarea
node Task-Tracker-Cli.js eliminar 1

Filtrar tareas por estado
node Task-Tracker-Cli.js lista todo
node Task-Tracker-Cli.js lista en-progreso
node Task-Tracker-Cli.js lista hecho

Tecnologías
Node.js
JSON para almacenamiento de datos


Project URL:
https://roadmap.sh/projects/task-tracker
Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir! 
