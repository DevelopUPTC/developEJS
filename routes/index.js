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
    //let {code, name, gender} = req.body;
    //let newReg = {code, name, gender};
    //students.push(newReg);
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
