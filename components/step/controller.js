const store = require('./store')

function addStep(type,text,content,place,stage,duration,number){
    return new Promise( async (resolve,reject)=>{
        const step = {
            type,text,content,place,stage,duration,number
        }
        const newStep = await store.add(step)
        resolve(newStep)
    })
}

function getStep(filter){
    return new Promise(async(resolve,reject)=>{
        const arrayOfSteps = await store.list(filter)
        resolve(arrayOfSteps)
    })
}
module.exports = { addStep,getStep }