@echo off
title Panel Admin - Mario Rodriguez Portfolio
cd /d "%~dp0"
echo.
echo  Iniciando Panel Admin...
echo  Se abrira el navegador automaticamente.
echo  Cierra esta ventana para parar el servidor.
echo.
python admin-server.py
pause
