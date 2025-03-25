
// Almacenamiento en memoria para las tareas
const tasks = [];
const MAX_TASKS = 5; // Constante para el número máximo de tareas

// Función para agregar una tarea
function addTask(task) {
  if (tasks.length >= MAX_TASKS) {
    return { success: false, message: "No puedes agregar más tareas. Límite alcanzado." };
  }

  const trimmedTask = task.trim();
  if (trimmedTask === "") {
    return { success: false, message: "No puedes agregar una tarea vacía." };
  }

  const newTask = {
    id: Date.now().toString(), // Usar timestamp como ID único
    title: trimmedTask,
    completed: false,
    createdAt: new Date()
  };
  
  tasks.push(newTask);
  return { success: true, message: `Tarea "${trimmedTask}" agregada.`, task: newTask };
}

// Función para listar todas las tareas
function listTasks() {
  if (tasks.length === 0) {
    return { tasks: [], message: "No hay tareas." };
  }
  return { tasks: [...tasks] };
}

// Función para eliminar una tarea por su ID
function removeTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  
  if (index === -1) {
    return { success: false, message: "Tarea no encontrada." };
  }
  
  const removed = tasks.splice(index, 1)[0];
  return { success: true, message: `Tarea "${removed.title}" eliminada.` };
}

// Función para actualizar una tarea
function updateTask(id, updates) {
  const index = tasks.findIndex(task => task.id === id);
  
  if (index === -1) {
    return { success: false, message: "Tarea no encontrada." };
  }
  
  if (updates.title !== undefined) {
    const trimmedTitle = updates.title.trim();
    if (trimmedTitle === "") {
      return { success: false, message: "La nueva tarea no puede estar vacía." };
    }
    tasks[index].title = trimmedTitle;
  }
  
  if (updates.completed !== undefined) {
    tasks[index].completed = updates.completed;
  }
  
  return { 
    success: true, 
    message: `Tarea actualizada a "${tasks[index].title}".`,
    task: tasks[index]
  };
}

module.exports = { addTask, listTasks, removeTask, updateTask };