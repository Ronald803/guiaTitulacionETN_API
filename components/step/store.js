const Model = require('./model')

async function add(step){
    const newStep = await new Model(step)
    newStep.save();
    return newStep;
}

async function list(filter){
    const arrayOfSteps = await Model.find(filter)
    return arrayOfSteps
}

module.exports = {add,list}