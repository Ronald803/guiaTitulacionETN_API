const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')

router.post('/',(req,res)=>{
    const {email,password} = req.body
    console.log({email},{password});
    controller.addUser(email,password)
        .then( newUser => {
            res.send(newUser)
        })
        .catch( e => {
            res.send(e)
        })
})

module.exports = router;