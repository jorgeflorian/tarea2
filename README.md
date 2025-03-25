API de Gestión de Tareas
Descripción del Proyecto
Esta es una API simple de gestión de tareas desarrollada con Express.js que permite crear, listar, actualizar y eliminar tareas con almacenamiento en memoria.
Características
•	Crear tareas
•	Listar tareas
•	Actualizar tareas
•	Eliminar tareas
•	Límite máximo de 5 tareas
Requisitos Previos
•	Node.js (v14 o superior)
•	npm
Instalación
1.	Clonar el repositorio
bash
Copy
git clone https://tu-repositorio/task-management-api.git
cd task-management-api
2.	Instalar dependencias
bash
Copy
npm install
Configuración del Proyecto
•	Archivo principal: server.js
•	Modelo de tareas: taskModel.js
Estructura de Archivos
Copy
project-root/
│
├── server.js          # Configuración del servidor Express
├── taskModel.js       # Lógica de gestión de tareas
└── package.json       # Dependencias y scripts
Rutas de la API
1. Ruta Principal
•	Método: OBTENER
•	URL: /
•	Descripción: Endpoint de prueba para verificar que la API está funcionando
•	Respuesta Exitosa: 
json
Copy
{
  "message": "API de gestión de tareas funcionando correctamente"
}
2. Listar Tareas
•	Método: OBTENER
•	URL: /api/tasks
•	Descripción: Obtiene todas las tareas
•	Respuesta Exitosa: 
json
Copy
{
  "tasks": [
    {
      "id": "1234567890",
      "title": "Comprar víveres",
      "completed": false,
      "createdAt": "2024-03-24T12:00:00.000Z"
    }
  ]
}
•	Respuesta Sin Tareas: 
json
Copy
{
  "tasks": [],
  "message": "No hay tareas."
}
3. Crear Tarea
•	Método: EXPONER
•	URL: /api/tasks
•	Parámetros Requeridos: 
json
Copy
{
  "title": "Título de la tarea"
}
•	Validaciones: 
o	Título no puede estar vacío
o	Máximo 5 tareas permitidas
•	Respuesta Exitosa (201): 
json
Copy
{
  "success": true,
  "message": "Tarea \"Comprar víveres\" agregada.",
  "task": {
    "id": "1234567890",
    "title": "Comprar víveres",
    "completed": false,
    "createdAt": "2024-03-24T12:00:00.000Z"
  }
}
•	Errores Posibles (400): 
json
Copy
{
  "success": false,
  "message": "El título de la tarea es requerido"
}
4. Actualizar Tarea
•	Método: PONER
•	URL: /api/tasks/:id
•	Parámetros: 
json
Copy
{
  "title": "Nuevo título (opcional)",
  "completed": true/false (opcional)
}
•	Validaciones: 
o	Título no puede estar vacío
•	Respuesta Exitosa (200): 
json
Copy
{
  "success": true,
  "message": "Tarea actualizada a \"Comprar víveres urgente\".",
  "task": {
    "id": "1234567890",
    "title": "Comprar víveres urgente",
    "completed": true,
    "createdAt": "2024-03-24T12:00:00.000Z"
  }
}
•	Errores Posibles (404): 
json
Copy
{
  "success": false,
  "message": "Tarea no encontrada."
}
5. Eliminar Tarea
•	Método: BORRAR
•	URL: /api/tasks/:id
•	Respuesta Exitosa (200): 
json
Copy
{
  "success": true,
  "message": "Tarea \"Comprar víveres\" eliminada."
}
•	Errores Posibles (404): 
json
Copy
{
  "success": false,
  "message": "Tarea no encontrada."
}
Ejecución del Proyecto
Desarrollo
bash
Copy
node server.js
Iniciar Servidor
•	Puerto por defecto: 3000
•	Base de la URL: http://localhost:3000
Limitaciones
•	Almacenamiento en memoria (datos se pierden al reiniciar)
•	Máximo 5 tareas permitidas
Tecnologías Utilizadas
•	Node.js
•	Express.js
Contribución
1.	Haz un fork del proyecto
2.	Crea tu rama de características
3.	Confirma tus cambios
4.	Envía un pull request
Licencia
[Especificar tipo de licencia]
