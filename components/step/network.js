const express       = require('express');
const router        = express.Router();
const controller    = require('./controller')

router.post('/',(req,res)=>{
    const {type,text,content,place,stage,duration,number} = req.body
    controller.addStep(type,text,content,place,stage,duration,number)
        .then( newStep => {
            res.send(newStep)
        })
        .catch( error => {
            res.send(error)
        })
})

router.get('/',(req,res)=>{
    controller.getStep(req.query)
        .then( arrayOfSteps => {
            res.send(arrayOfSteps)
        })
        .catch( error => {
            res.send(error)
        })
})

module.exports = router;

// {
//     "type":"Academic",
//     "text":"Inscripción en la materia",
//     "content": [
//       "Ingresar al sistema académico",
//       "Elegir la opción de inscripción",
//       "Ingresar nombre de tutor y ..."
//     ],
//     "place":"http://sisacademico.umsa.edu.bo/mi/",
//     "stage":"profile",
//     "duration":5,
//     "number":"1"
//   }