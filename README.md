# To-Do List Application

Aplicación de lista de tareas con backend en Laravel y frontend en React + Vite.

## Descripción

Este proyecto implementa una API REST para tareas en `backend/` y una interfaz de usuario en `frontend/`.
El backend gestiona las tareas con CRUD completo, y el frontend las consume desde el navegador.

## Estructura del proyecto

```
to-do-list/
├── backend/          # API REST con Laravel
│   ├── app/
│   │   ├── Http/Controllers/TaskController.php
│   │   └── Models/Task.php
│   ├── bootstrap/app.php
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── resources/views/welcome.blade.php
│   ├── vite.config.js
│   └── package.json
├── frontend/         # Aplicación React con Vite
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   └── css/app.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── VERIFICACION.md   # Verificación del estado del proyecto
├── DOCUMENTACION.md  # Explicación y uso del proyecto
└── README.md
```

## Requisitos

- PHP 8.1+
- Composer
- Node.js 18+
- npm
- SQLite (el backend usa SQLite por defecto)

## Backend - Laravel API

### Instrucciones

```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

### URL de backend

- `http://127.0.0.1:8000`

### Archivos clave

- `backend/bootstrap/app.php` - carga rutas web y API.
- `backend/routes/api.php` - define `Route::apiResource('tasks', TaskController::class)`.
- `backend/routes/web.php` - define la ruta principal `/`.
- `backend/app/Http/Controllers/TaskController.php` - lógica CRUD de tareas.
- `backend/resources/views/welcome.blade.php` - landing page de bienvenida.

## Frontend - React + Vite

### Instrucciones

```bash
cd frontend
npm install
npm run dev
```

### URL de frontend

- `http://127.0.0.1:5173`

### Archivos clave

- `frontend/src/main.jsx` - punto de entrada React.
- `frontend/src/App.jsx` - componente principal con CRUD.
- `frontend/src/css/app.css` - estilos de la aplicación.
- `frontend/vite.config.js` - configuración Vite del frontend.

## Endpoints de la API

- `GET /api/tasks` - obtener todas las tareas.
- `POST /api/tasks` - crear nueva tarea.
- `GET /api/tasks/{id}` - ver tarea específica.
- `PATCH /api/tasks/{id}` - actualizar tarea.
- `DELETE /api/tasks/{id}` - eliminar tarea.

### Ejemplos con curl

```bash
curl -X POST http://127.0.0.1:8000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"title":"Mi tarea","description":"Descripción"}'

curl http://127.0.0.1:8000/api/tasks \
  -H "Accept: application/json"
```

## Características principales

- CRUD completo de tareas.
- Interfaz de usuario React con Vite.
- API REST con Laravel.
- Base de datos SQLite por defecto.
- Configuración de React en `backend/vite.config.js` y `backend/package.json`.
- Página de bienvenida del backend con enlaces al frontend y API.

## Notas importantes

- El frontend puede consumir los endpoints `/api/tasks` desde `http://127.0.0.1:5173`.
- El backend debe estar en ejecución en `http://127.0.0.1:8000`.
- El frontend tiene proxy a `/api` hacia el backend si se configura en `vite.config.js`.

## Scripts útiles

### Backend

- `php artisan serve`
- `php artisan migrate`

### Frontend

- `npm run dev`
- `npm run build`

## Archivos de documentación

- `VERIFICACION.md` - lista de verificación del proyecto.
- `DOCUMENTACION.md` - descripción y funcionamiento completo.
