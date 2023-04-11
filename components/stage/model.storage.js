const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    notes: {
        type: Array,
        required: true
    }
})

const model     = mongoose.model('Stage',mySchema);
module.exports  = model;

// {
//     "requirements": "Haber aprobado 40 materias de carrera ~ 8vo semestre",
//     "name": "profile",
//     "notes": [
//       "A partir del momento de registro del perfil se tienen 4 semestres para terminar el proyecto de grado, posterior a eso se debe elegir otro tema y reiniciar el trámite."
//     ]
// }