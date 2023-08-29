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

async function updateProjects(id,project){
    const foundProfessor = await ModelProfessor.findById(id);
    foundProfessor.projects.push(project)
    await foundProfessor.save()
    return foundProfessor
}
module.exports = { add,list,updateProjects }