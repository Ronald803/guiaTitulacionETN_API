const store         = require('./store.stage');
const storeSteps    = require('../step/store');
const controllerUser= require('../user/controller');

function addStage(requirements,name,notes,title){
    return new Promise(async(resolve,reject)=>{
        const stage = {
            requirements,name,notes,title
        }
        const newStage = await store.add(stage);
        const allUsers = await controllerUser.getUser()
        allUsers.map(async (user)=>{
            await controllerUser.addTrajectory(user._id,name,[])
        })
        resolve(newStage)
    })
}

function getStage(filter){
    return new Promise(async(resolve,reject)=>{
        console.log({filter});
        const steps = await storeSteps.list({stage: filter.name})
        const arrayOfStages = await store.list(filter)
        resolve({
            title: arrayOfStages[0].title,
            requirements: arrayOfStages[0].requirements,
            name: arrayOfStages[0].name,
            notes: arrayOfStages[0].notes,
            data: [...steps]
        })
    })
}

module.exports = { addStage,getStage }