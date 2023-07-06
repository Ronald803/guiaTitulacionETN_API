const express       = require('express');
const router        = express.Router();
const controller    = require('./controller') 
const response      = require('../../network/response')

router.post('/',(req,res)=>{
    const {email,password} = req.body;
    controller.login(email,password)
        .then( (message)=>{
            response.success(req,res,'Loggeado correctamente',message,200)
        })
        .catch( e=>{
            response.error(req,res,'Algo salió mal',400,e)
        })
})

router.post('/recoverIdentity',(req,res)=>{
    const {email} = req.body;
    controller.sendEmailToRecoverIdentity(email)
        .then(message=>{
            response.success(req,res,`Se envió el link de recuperación de contraseña a ${email}`,message,200)
        })
        .catch( e=>{
            response.error(req,res,'Algo salió mal',400,e)
        })
})

router.put('/newpassword/:token',(req,res)=>{
    const token = req.params.token;
    const {newpassword} = req.body;
    controller.saveNewPassword(token,newpassword)
        .then(message=>{
            response.success(req,res,'Se cambió la contraseña exitosamente',message,200)
        })
        .catch(e=>{
            response.error(erq,res,'Algo salió mal',400,e)
        })
})

module.exports = router;