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
