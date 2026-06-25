# Documentación del proyecto To-Do List

## ¿Qué es este proyecto?

Este proyecto es una aplicación de lista de tareas (To-Do List) con una arquitectura separada:

- Backend: API REST construida con Laravel.
- Frontend: aplicación SPA construida con React y Vite.

El backend ofrece los endpoints CRUD de tareas y el frontend consume esa API para mostrar y modificar tareas.

## Estructura del proyecto

- `backend/`
  - `app/Http/Controllers/TaskController.php`: controla la lógica CRUD de tareas.
  - `app/Models/Task.php`: modelo Eloquent de la entidad `Task`.
  - `routes/api.php`: registra las rutas de API para `tasks`.
  - `routes/web.php`: ruta principal que muestra la vista de bienvenida.
  - `resources/views/welcome.blade.php`: página de inicio básica del backend.
  - `vite.config.js`: configuración de Vite para el backend, incluyendo React.
  - `package.json`: dependencias y scripts del paquete de frontend integrado.

- `frontend/`
  - `src/main.jsx`: punto de entrada de la app React.
  - `src/App.jsx`: componente principal con la interfaz de tareas.
  - `src/css/app.css`: estilos de la aplicación.
  - `vite.config.js`: configuración de Vite para el frontend.
  - `package.json`: dependencias y scripts del frontend.

## Cómo funciona

### Backend

1. Laravel arranca y registra rutas web y API.
2. `TaskController` maneja solicitudes de tareas:
   - `index`: lista todas las tareas.
   - `store`: crea una nueva tarea.
   - `show`: devuelve una tarea por ID.
   - `update`: actualiza una tarea existente.
   - `destroy`: elimina una tarea.
3. La validación de datos se aplica antes de crear o actualizar tareas.
4. El modelo `Task` guarda los atributos `title`, `description` y `completed`.

### Frontend

1. La app React carga datos desde `/api/tasks`.
2. El usuario puede:
   - ver la lista de tareas,
   - crear una tarea nueva,
   - marcarla como completada,
   - eliminarla.
3. Cada acción del usuario envía una request al backend:
   - creación con `POST`
   - actualización con `PATCH`
   - eliminación con `DELETE`
4. El frontend actualiza su estado según la respuesta JSON del backend.

## Uso

### Requisitos mínimos

- PHP instalado.
- Composer instalado.
- Node.js y npm instalados.
- Base de datos SQLite o la configuración de Laravel apropiada.

### Ejecutar el backend

```bash
cd backend
composer install
php artisan serve
```

Por defecto, Laravel arrancará en `http://127.0.0.1:8000`.

### Ejecutar el frontend

```bash
cd frontend
npm install
npm run dev
```

La app de desarrollo estará disponible en `http://127.0.0.1:5173/`.

### Comandos útiles

- `cd backend && php artisan serve` – iniciar backend.
- `cd frontend && npm run dev` – iniciar frontend.
- `cd frontend && npm run build` – generar bundle de producción.

## Endpoints disponibles

- `GET /api/tasks` – lista todas las tareas.
- `POST /api/tasks` – crea una nueva tarea.
- `GET /api/tasks/{id}` – consulta una tarea por ID.
- `PATCH /api/tasks/{id}` – actualiza una tarea.
- `DELETE /api/tasks/{id}` – elimina una tarea.

## Cómo usar la aplicación

1. Abre `http://127.0.0.1:5173/` en el navegador.
2. Completa el formulario de nueva tarea con título y descripción.
3. Haz clic en "Crear" para guardar la tarea.
4. Usa el botón de completar para cambiar el estado `completed`.
5. Usa el botón de eliminar para borrar la tarea.

## Integración y configuración adicional

- El backend se configuró para servir la vista principal desde `backend/resources/views/welcome.blade.php`.
- El archivo `backend/vite.config.js` incluye el plugin React (`@vitejs/plugin-react`).
- `backend/package.json` declara `react`, `react-dom` y `@vitejs/plugin-react`.
- El frontend funciona con Vite y puede ser servido en modo desarrollo con HMR.

## Notas técnicas

- El campo `completed` se valida con `sometimes|boolean` para que sea opcional en solicitudes.
- Los errores de recurso no encontrado devuelven JSON con `{ "error": "Task not found" }`.
- Los cambios en `backend/routes/web.php` separan la ruta web de las rutas API.

## Para avanzar

- Agregar autenticación de usuarios.
- Añadir filtros por estado de tarea (pendiente/completada).
- Guardar la fecha de creación y actualización.
- Implementar tests automáticos de backend y frontend.
