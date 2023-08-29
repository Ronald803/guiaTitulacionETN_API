const ModelProfessor = require('./professor.model');

function add(professor){
    const newProfessor      = new ModelProfessor(professor);
    const professorSaved    = newProfessor.save();
    return professorSaved 
}

async function list(filter){
    const professors = await ModelProfessor.find(filter)
    return professors
}

module.exports = { add,list}