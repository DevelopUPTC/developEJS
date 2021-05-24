# Embedded Java Script - EJS

Proyecto de Ejemplo para uso de NodeJS con Express y EJS como motor de vistas

## Estructura de la carpeta del proyecto

```bash
├── README.md
├── index.js
├── package.json
└── routes/
| 	├── index.js
└── views/
|    ├── index.ejs
|    ├── insert.ejs
|    ├── about.ejs
|    └── templates/
|    		├── header.ejs
|    		├── navbar.ejs
|    		└── footer.ejs
└── resources/
    └── files/
|    	└── colombia.js
└── public/
    └── js/
    	└── scripts.js

```

En la carpeta `templates` se encuentran las plantillas que se importarán en las diferentes parte de cada página o documento HTML para no repetir código

## Instalación y Configuración

```bash
mkdir ejs
cd ejs
touch index.js
mkdir routes
mkdir views
npm init
npm install express --save
npm install ejs --save
npm install body-parser --save
npm install nodemon --save-dev
```

### Archivo index.js

El Archivo `index.js` es donde se configura la aplicación, tiene el siguiente contenido:

```javascript
'use strict';

//import modules
const express = require('express');
const path = require('path');
const routeIndex = require('./routes/index.js');

//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 3000 );
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.get('/',routeIndex);

//start server
app.listen(app.get('port'),()=>{
    console.log(`Server Listen to port ${app.get('port')}`);
}); 
```

### Archivo routes/index.js

Es el archivo en donde se configuran las rutas, tiene el siguiente conrtenido

```javascript
const {Router}= require('express');
const router = new Router();

let students = []

router.get('/',(req,res)=>{
    res.render("index",{students});
});

router.get('/about',(req, res)=>{
    res.render('about');
});

router.post('/newRecord',(req,res)=>{
    let {code, name, gender} = req.body;
    let newReg = {code, name, gender};
    //students.push(newReg);
    res.redirect('/');
});

module.exports = router;

```

Tiene un arreglo de estudiantes que comparte entre los archivos o vistas de la aplicación.

