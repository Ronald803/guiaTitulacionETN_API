const express       = require('express');
const router        = express.Router();
const controller    = require('./controller.stage')

router.post('/',(req,res)=>{
    const {requirements,name,notes,title} = req.body;
    controller.addStage(requirements,name,notes,title)
        .then( newStage => {
            res.send(newStage);
        })
        .catch( error => {
            res.send(error);
        })
})

router.get('/',(req,res)=>{
    controller.getStage(req.query)
        .then( stage => {
            res.send(stage)
        })
        .catch( error => {
            res.send(error)
        })
})

module.exports = router;

// {
//     "requirements": "Haber aprobado 40 materias de carrera ~ 8vo semestre",
//     "name": "profile",
//     "notes": [
//       "A partir del momento de registro del perfil se tienen 4 semestres para terminar el proyecto de grado, posterior a eso se debe elegir otro tema y reiniciar el trámite."
//     ]
// }