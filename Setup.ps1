<#
.Synopsis
Configurar las dependencias del proyecto

.Description
Ejecuta comandos linea por linea asumiendo que los requisitos ya han sido
satisfechos

.Notes
En windows, puede que sea requerido que permitas la ejecucion de este script
Setup.ps1 modificando el execution policy para el usuario. Puedes  hacer esto
ejecutando el siguiente comando:

PS C:\> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Para mas informacion sobre Execution Policies: 
https://go.microsoft.com/fwlink/?LinkID=135170

#>
Clear-Host
Write-Output "Instalando frontend"
Set-Location .\rentxpress
npm install
Write-Output "Instalando backend"
Set-Location ..\backend
python3.11 -m venv .venv
./.venv/Scripts/Activate.ps1
python3.11 -m pip install poetry
python3.11 -m poetry install
Set-Location .\api
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
Set-Location ..\..
deactivate
Write-Output "Instalacion Finalizada"