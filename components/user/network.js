const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')

router.post('/',(req,res)=>{
    const {name,username,email,professor,tutor,projectTitle,mention,courts,password} = req.body
    //console.log({email},{password});
    controller.addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password)
        .then( newUser => {
            res.send(newUser)
        })
        .catch( e => {
            res.send(e)
        })
})

module.exports = router;