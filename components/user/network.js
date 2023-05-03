const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')
const response      = require('../../network/response')

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