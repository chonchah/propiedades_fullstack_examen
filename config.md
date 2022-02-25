Configuración del examen practico.

# Test_Full_Stack_Frentend Setup

## Prerequisitos

El proyecto backend requiere trabajar con un entorno local Apache/Ngnix y con PHP, Composer y MySQL

El proyecto frontent requiere traajar con NodeJS version 16.13, npm o yarn, React


## Instalacion del proyecto backend

1. Ir a la carpeta de su proyecto backend: `cd web\backend`
2. Instalar las dependencias del proyecto: `composer install`
3. Crear una base de datos en su servidor para poder usarse con la app
4. Crear un nuevo archivo .env: `cp .env.example .env`
5. Agregar sus propias credenciales de base de datos en el archivo .env en DB_DATABASE, DB_USERNAME, DB_PASSWORD
6. Crear las tablas de la base de datos: `php artisan migrate`
7. Generar la clave de la aplicación: `php artisan key:generate`
8. Habilitar link simbolico a la carpeta storage para poder ver las imagenes subidas: `php artisan storage:link`

Para puebas puede ejecutar el proyecto con `php artisan serve`


## Instalacion del proyecto frontend

1. Ir a la carpeta del proyecto frontend: `cd web\frontend`
2. Instalar las dependencias del proyecto: `yarn install`
3. Crear un nuevo archivo .env: `cp .env.example .env`
4. `REACT_APP_API_URL` debe contener la URL de su proyecto backend (eg. http://localhost:8000/api)
5. `REACT_APP_API_KEY_GOOGLE_MAPS` debe contener su llave de google maps
6. `REACT_APP_IMAGE_URL` debe contener la URL del poyecto para imagenes (eg. http://localhost:8000)
7. Ejecute `yarn start` para iniciar la aplicación en un entorno de desarrollo local.