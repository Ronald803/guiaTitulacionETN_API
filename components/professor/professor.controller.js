const professorStore = require('./professor.store')

function addProfessor(name,subjects,projects){
    return new Promise(async(resolve,reject)=>{
        const professor = {name,subjects,projects}
        const newProfessor = await professorStore.add(professor)
        resolve(newProfessor)
    })
}

function getProfessor(filter){
    return new Promise(async(resolve,reject)=>{
        const arrayOfProfessor = await professorStore.list()
        resolve(arrayOfProfessor)
    })
}

module.exports = {addProfessor,getProfessor}