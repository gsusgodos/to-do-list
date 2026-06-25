@echo off
REM Script para iniciar el backend y frontend en paralelo

echo.
echo ================================
echo To-Do List Application Launcher
echo ================================
echo.

REM Abrir una nueva ventana para el backend
echo Iniciando Backend (Laravel)...
start cmd /k "cd /d %~dp0backend && php artisan serve"

REM Esperar un poco para que el backend inicie
timeout /t 2

REM Abrir una nueva ventana para el frontend
echo Iniciando Frontend (React + Vite)...
start cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ================================
echo Servidores iniciados:
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://127.0.0.1:5173
echo ================================
echo.
pause
