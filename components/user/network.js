const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')
const response      = require('../../network/response')

router.post('/trajectory',(req,res)=>{
    const {studentId,stage,steps} = req.body
    controller.addTrajectory(studentId,stage,steps)
        .then(newTrajectory=>{
            res.send(newTrajectory)
        })
        .catch(e=>{
            res.send(e)
        })
})
router.get('/trajectory',(req,res)=>{
    controller.getTrajectory(req.query)
        .then(arrayOfTrajectories=>{
            res.send(arrayOfTrajectories)
        })
        .catch(e=>{
            res.send(e)
        })
})


router.post('/',(req,res)=>{
    const {name,username,email,professor,tutor,projectTitle,mention,courts,password} = req.body
    //console.log({email},{password});
    controller.addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password)
        .then( newUser => {
            response.success(req,res,"usuario registrado correctamente",newUser,200)
        })
        .catch( e => {
            response.error(req,res,"Algo salió mal",400,e)
        })
})
module.exports = router;