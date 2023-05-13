const Model     = require('./model');
const ModelDos    = require('./model.trajectory');
function add(user){
    const newUser = new Model(user);
    const userSaved = newUser.save();
    return userSaved
}

async function list(filter){
    const users = await Model.find(filter);
    return users;
}

async function addTrajectory(trajectory){    
    const newTrajectory = await new ModelDos(trajectory)
    newTrajectory.save();
    return newTrajectory;
}

async function listTrajectory(filter){
    const arrayOfTrajectories = await ModelDos.find(filter)
    return arrayOfTrajectories
}
module.exports = { add,list,addTrajectory,listTrajectory }