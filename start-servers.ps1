# Script para iniciar el backend y frontend en paralelo

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "To-Do List Application Launcher" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

# Iniciar Backend en una nueva ventana
Write-Host "Iniciando Backend (Laravel)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptPath\backend'; php artisan serve"

# Esperar a que el backend inicie
Start-Sleep -Seconds 2

# Iniciar Frontend en una nueva ventana
Write-Host "Iniciando Frontend (React + Vite)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$scriptPath\frontend'; npm run dev"

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Servidores iniciados:" -ForegroundColor Cyan
Write-Host "Backend:  http://127.0.0.1:8000" -ForegroundColor Yellow
Write-Host "Frontend: http://127.0.0.1:5173" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
