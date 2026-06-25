# Verificación del proyecto To-Do List

## Objetivo

Verificar que el proyecto de lista de tareas funciona correctamente en su backend Laravel y en el frontend React/Vite.

## Puntos verificados

- El backend carga correctamente `backend/bootstrap/app.php` con rutas web y API.
- La ruta principal `/` muestra la vista `backend/resources/views/welcome.blade.php`.
- El endpoint `/api/tasks` está disponible en `backend/routes/api.php`.
- El controlador `backend/app/Http/Controllers/TaskController.php` responde con JSON y maneja errores 404.
- El frontend de desarrollo está configurado para ejecutarse en `127.0.0.1:5173`.
- Las dependencias de React y Vite están instaladas en `backend/package.json`.

## Archivos clave

- `backend/bootstrap/app.php`
- `backend/routes/web.php`
- `backend/routes/api.php`
- `backend/app/Http/Controllers/TaskController.php`
- `backend/resources/views/welcome.blade.php`
- `backend/vite.config.js`
- `backend/package.json`

## Verificación funcional

### Backend

- Acceder a `http://127.0.0.1:8000/` debe mostrar la página de bienvenida.
- Acceder a `http://127.0.0.1:8000/api/tasks` debe devolver JSON.
- El API debe aceptar y responder correctamente a:
  - `GET /api/tasks`
  - `POST /api/tasks`
  - `GET /api/tasks/{id}`
  - `PATCH /api/tasks/{id}`
  - `DELETE /api/tasks/{id}`

### Frontend

- El servidor de desarrollo debe ejecutar en `http://127.0.0.1:5173/`.
- La interfaz debe poder consumir la API y mostrar tareas.

## Pasos de verificación

1. Abrir terminal en `backend`.
2. Ejecutar `php artisan serve`.
3. Abrir otra terminal en `frontend`.
4. Ejecutar `npm install` (si no está instalado) y luego `npm run dev`.
5. Confirmar que `http://127.0.0.1:5173/` carga la aplicación.
6. Confirmar que `http://127.0.0.1:8000/api/tasks` responde.
7. Probar crear, editar y eliminar tareas desde el frontend.

## Resultado esperado

- La página de bienvenida del backend muestra un mensaje de API disponible y enlaces de acceso.
- El endpoint `/api/tasks` responde con JSON.
- El frontend carga correctamente y consume la API.
- Las operaciones CRUD en tareas funcionan sin errores.

## Observaciones

- `backend/vite.config.js` está configurado con React y HMR en `127.0.0.1:5173`.
- `backend/package.json` contiene `react`, `react-dom` y `@vitejs/plugin-react`.
- La respuesta de error 404 se retorna como JSON con clave `error`.

