const professorStore = require('./professor.store')

function addProfessor(){
    return new Promise(async(resolve,reject)=>{
        const newProfessor = await professorStore.add()
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