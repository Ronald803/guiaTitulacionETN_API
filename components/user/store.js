const Model = require('./model');

function add(user){
    const newUser = new Model(user);
    const userSaved = newUser.save();
    return userSaved
}

async function list(filter){
    const users = await Model.find(filter);
    return users;
}

module.exports = { add,list }