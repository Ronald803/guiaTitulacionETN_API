const Model = require('./model.trajectory')

async function list(filter){
    const arrayOfTrajectories = await Model.find(filter)
    return arrayOfTrajectories
}

async function add(trajectory){
    const newTrajectory = await new Model(trajectory);
    newTrajectory.save();
    return newTrajectory;
}
module.exports = {list,add}