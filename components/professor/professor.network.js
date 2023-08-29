const express               = require('express');
const router                = express.Router();
const professorController   = require('./professor.controller');

router.get('/',(req,res)=>{
    professorController.getProfessor()
        .then(professors=>{
            res.send(professors)
        })
        .catch()
})

router.post('/',(req,res)=>{
    const {name, subject, projects} = req.body;
    professorController.addProfessor()
        .then(msg=>{
            res.send(msg)
        })
        .catch()
})

module.exports = router;