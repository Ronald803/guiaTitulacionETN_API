const express       = require('express');
const router        = express.Router();
const controller    = require('./controller.trajectory')

router.get('/',(req,res)=>{
    controller.getTrajectory(req.query)
        .then(arrayOfTrajectories=>{
            res.send(arrayOfTrajectories)
        })
        .catch(e=>{
            res.send(e)
        })
})
router.post('/',(req,res)=>{
    const {studentId,stage,steps} = req.body;
    controller.addTrajectory(studentId,stage,steps)
        .then(newTrajectory=>{
            res.send(newTrajectory)
        })
        .catch(e=>{res.send(error)})
})

module.exports = router;