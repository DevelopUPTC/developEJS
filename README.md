# Embedded Java Script - EJS

Proyecto de Ejemplo para uso de NodeJS con Express y EJS como motor de vistas

## Estructura de la carpeta del proyecto

## Instalación y Configuración

```bash
mkdir ejs
cd ejs
mkdir src
touch src/app.js
touch src/start.js
mkdir routes
mkdir views
npm init
npm install express --save
npm install ejs --save
npm install body-parser --save
npm install nodemon --save-dev
```

> El Archivo `app.js` es donde se configura el servidor. En `index.js` es el punto de inicio de la aplicación. En la
> configuración del comando `npm init` dejar como punto de entrada el archivo `start.js`

En el archivo `package.json` en el elemento `scripts`, agregar un nuevo elemento `"start:"node src/start.js"`, lo
anterior permite que el servidor se inicie con el comando respectivo, de igual manera, con el script `"watch":"nodemon
start.js --ignore modules"` se configura para que para cada cambio en los archivos del sitio  
