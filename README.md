# RentXpress

## Descripción
RentXpress, es una aplicacion que te permite rentar vehiculos de una forma parecida a como se rentan hogares en airbnb.
El objetivo sera la de promover un medio viable por el cual los usuarios puedan tener una forma de gestionar clientes
y horarios para tener control sobre su flota de automoviles.

Provee una interfaz de facil uso para personas que busquen hacer dinero extra con la renta de sus automoviles. El
proyecto aun sigue en desarrollo.

## Tabla de contenidos
* [Informacion general](#informacion-general)
* [Capturas de pantalla](#capturas-de-pantalla)
* [Instalacion](#instalacion)
* [Uso](#uso)
* [Contribuir](#contribuir)
* [Tecnologias](#tecnologias)
* [Funciones](#funciones)
* [Estado](#estado)
* [Inspiracion](#inspiracion)
* [Licencia](#licencia)
* [Contacto](#contacto)

## Informacion general
RentXpress es una aplicacion que tiene como objetivo demostrar nuestra
capacidad de trabajo en equipo, refleja la capacidad que tenemos como equipo
de crear una solucion a una problematica desde cero adaptandonos rapidamente
a los cambios y experimentando con nuevas tecnologias.

## Capturas de pantalla
![In development](https://media.tenor.com/thrNXFAGzk4AAAAC/capoo-bugcat.gif)
*  Aun esta en desarrollo :D

## Instalacion
Para configurar el proyecto sigue los siguientes pasos:

### Prequisitos:
Este proyecto necesita que se instalen los siguientes programas:
- Python 3.11.9
- Nodejs 20.13.1 LTS
- Postgresql 16

### Descargar el proyecto
**Paso 1** - *Clonar el repositorio*

```
git clone https://github.com/No-Country/c18-55-m-python-react
```

**Paso 2** - *Cambiarse a la carpeta del repositorio*
```
cd c18-55-m-python-react
```
Las variables de entorno deben ser configuradas de la siguiente manera:
- En la carpeta backend, hacer una copia del archivo `.env-example`
y renombrarlo a `.env`
- Editar el archivo `.env` segun la guia a continuacion.

### Variables de entorno
`SECRET_KEY`: Este valor debe ser una frase aleatoria o no, el cual servira
para el encriptar hashes. Debe mantenerse en secreto.

`ALLOWED_HOSTS`: Este valor debe tener direcciones ip o nombres de dominio
(separadas por comas) a los cuales se les permitira el acceso al servidor.
- Por ejemplo: `localhost, 127.0.0.1` para permitir la ejecucion en local.

`CORS_ALLOWED_ORIGINS`: Este valor debe tener direcciones ip o nombres de
dominio (separadas por comas) con sus protocolos (ya sea http:// o https://) a los
cuales se les permitira el acceso al servidor.
- Por ejemplo: `http://localhost, http://127.0.0.1` para permitir la ejecucion en local.

`DB_NAME`: Este valor sera el nombre de la base de datos que haya hecho en
postrgresql.

`DB_USER`: Este valor es el nombre de usuario en postgres que haya elegido.

`DB_PASSWORD`: Este valor es la contraseña de su usuario en postgres.

`DB_HOST`: Este valor es la direccion ip o el nombre de dominio de su servidor
postgresql.
- Por ejemplo: `localhost` o `127.0.0.1` si es que lo esta ejecutando en
local.

`DB_PORT`: Este valor es el numero del puerto de su base de datos.

### Instalar dependencias
Las dependencias pueden variar dependiendo si estas en windows o en linux,
durante la instalacion se te pedira crear un usuario de administrador para
el servidor de backend:

**En Windows:**
* Puede que sea requerido que permitas la ejecucion de este script
modificando el execution policy para el usuario. Puedes  hacer esto
ejecutando el siguiente comando:

    ```
    PS C:\> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    Para mas informacion sobre Execution Policies: 
https://go.microsoft.com/fwlink/?LinkID=135170

    ```
    PS C:\> .\Setup.ps1
    ```

**En Linux**
*   Este script no esta en su version final, pero se pueden usar los comandos
que estan definidos en este archivo manualmente para configurar el proyecto:
    ```
    ~$ ./Setup.sh
    ```

## Uso
Para usar la aplicacion completa debe iniciar los servidores manualmente
en una consola aparte:
* **Backend**

    Si esta en windows:
    ```
    .\backend\.venv\Scripts\Activate.ps1
    ```
    ```
    python .\backend\api\manage.py runserver
    ```
    Si esta en Linux:
    ```
    source ./backend/.venv/Scripts/activate
    ```
    ```
    python .\backend\api\manage.py runserver
    ```
* **Frontend**

    Si esta en windows:
    ```
    Set-Location .\rentxpress
    ```
    ```
    npm run build && npm run start
    ```
    Si esta en Linux:
    ```
    source ./backend/.venv/Scripts/activate
    ```
    ```
    python .\backend\api\manage.py runserver
    ```

## Contribuir
Las contribuciones de la comunidad son bienvenidas. Para contribuir a
el proyecto, siga estas pautas:

Haz fork de este repositorio.
1. Crea una nueva rama: `git checkout -b new-feature`
2. Haz un commit de tus cambios: `git commit -m 'Add 
new feature'`
3. Publicalo a la rama: `git push origin new-feature`
4. Haz una Pull Request.

## Tecnologias
* Next.js - version 14.2.3
* Django - version 5.0.6
* Django Rest Framework - version 3.15.1

## Funciones
Lista de funciones hechas y para desarrollo futuro
* [Sin implementar aun]

To-do list:
* [Sin implementar aun]

## Estado
El proyecto está: _En progreso_

## Inspiracion
Proyecto inspirado en Airbnb

## Licencia
Este proyecto esta licenciado bajo GNU GPLv3. Para mas detalles visite el archivo 
LICENSE.

## Contacto
Para cualquier pregunta o retroalimentación, sientanse libre de contactarnos a
traves de la seccion de issues con la etiqueta Feedback.
