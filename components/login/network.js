const express       = require('express');
const router        = express.Router();
const controller    = require('./controller') 

router.post('/',(req,res)=>{
    const {email,password} = req.body;
    controller.login(email,password)
        .then( (message)=>{
            res.send(message)
        })
        .catch( error=>{
            res.send(error)
        })
})

module.exports = router;