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
