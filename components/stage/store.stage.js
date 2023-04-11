const Model = require('./model.storage')

async function add(stage){
    const newStage = await new Model(stage);
    newStage.save();
    return newStage
}

async function list(filter){
    const arrayOfStages = await Model.find(filter)
    return arrayOfStages
}

module.exports = { add,list }