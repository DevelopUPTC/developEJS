const express= require('express');
const router = express.Router();

const colombia = require('./../resources/files/colombia');

let students = []

router.get('/',(req,res)=>{
    res.render("index",{students:students,title:"Página de Inicio"});
});

router.get('/insert',(req, res)=>{
    res.render('insert',{title:"Insertar Estudiante",
        departments:colombia.departments,
        towns:colombia.towns});
});

router.post('/insert',(req,res)=>{
    const{code, name, lastName, gender, dpto, town, email, phone } = req.body;
    const dptoAux = colombia.departments.find( record => record.code == dpto ).name;
    const townAux = colombia.towns.find( record => record.code == town ).name;
    const city = townAux.concat( '-', dptoAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    let newReg = {code, lastName, name, genAux, city, email, phone  };
    students.push(newReg);
    res.redirect('/');
});

router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
