const store = require('./store.trajectory')

function getTrajectory(filter){
    return new Promise(async(resolve,reject)=>{
        const arrayOfTrajectory = await store.list(filter)
        resolve(arrayOfTrajectory)
    })
}

function addTrajectory(studentId,stage,steps){
    return new Promise(async(resolve,reject)=>{
        const trajectory = {studentId,stage,steps};
        const newTrajectory = await store.add(trajectory);
        resolve(newTrajectory)
    })
}

module.exports = { getTrajectory,addTrajectory }