const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')
const response      = require('../../network/response')
const {validateJWT} = require('../../middlewares/validate')
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
router.put('/trajectory/:stage_id',validateJWT(),(req,res)=>{
    const stage_id = req.params.stage_id;
    const {steps} = req.body;
    controller.updateTrajectory(stage_id,steps)
        .then(stageUpdated=>{
            response.success(req,res,"Progreso registrado correctamente",stageUpdated,200)
        })
        .catch(e=>{
            response.error(req,res,"Algo salió mal",400,e)
        })
})
router.post('/',(req,res)=>{
    const {name,username,email,professor,tutor,projectTitle,mention,courts,password} = req.body
    controller.addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password)
        .then( newUser => {
            response.success(req,res,"usuario registrado correctamente",newUser,200)
        })
        .catch( e => {
            response.error(req,res,"Algo salió mal",400,e)
        })
})
router.get('/',validateJWT(),(req,res)=>{
    controller.getUser()
        .then(users=>{
            response.success(req,res,users.length,users,200)
        })
        .catch(e=>{
            response.error(req,res,"Algo salió mal",400,e)
        })
})
module.exports = router;