const express       = require('express');
const router        = express.Router();
const controller    = require('./controller.suggestions');
const {validateJWT} = require('../../middlewares/validate');
const response      = require('../../network/response');

router.post('/',validateJWT(),(req,res)=>{
    const autor = req.user.name;
    const {suggestion} = req.body;
    controller.addSuggestion(suggestion,autor)
        .then(suggestionSaved=>{
            response.success(req,res,"Sugerencia guardada correctamente",suggestionSaved,200)
        })
        .catch(e=>{
            response.error(req,res,"Algo salió mal",400,e)
        })
    
})

router.get('/',validateJWT(),(req,res)=>{
    controller.getSuggestions()
        .then(suggestions=>{
            res.json(suggestions)
        })
        .catch(e=>{
            res.json(e)
        })
})

module.exports = router;