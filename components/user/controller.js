const store         = require('./store')
const bcryptjs      = require('bcryptjs')
const jwt           = require('jsonwebtoken')
const storeStage    = require('../stage/store.stage')
const professorStore= require('../professor/professor.store')

function addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password){
    return new Promise( async (resolve,reject)=>{
        if(!name || !email || !mention || !password){return reject('Incomplete Data')}
        //______________ encrypting password ______________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword = bcryptjs.hashSync( password,salt )
        // ______________ Checking if the professor exists in the data base ______________
        // ___________ if it doesn't exists it will be storage in the database ___________
        const professorFound = await professorStore.list({"name": professor});
        if(professorFound.length==0){
            await professorStore.add({ name:professor,subjects: [],projects: [name] })
        } else { await professorStore.updateProjects(professorFound[0]._id,name) }
        //______________ Storing the info of the new user _______
        const newUser = {
            name,username,email,professor,tutor,projectTitle,mention,courts,
            password: encryptPassword,
            state: "created",
            rol: "user"
        } 
        const userSaved = await store.add(newUser)
        //_________________ Creating an empty trajectory _______
        const stages = await storeStage.list()
        stages.map( stage=>{addTrajectory(userSaved._id,stage.name,[])})
        // ________________ Generating jwtoken _____________
        const payload = {uid: userSaved._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: userSaved.name,
            rol: userSaved.rol,
            token
        })
    } )
}
function getUser(filter){
    return new Promise(async(resolve,reject)=>{
        const users = await store.list(filter);
        resolve(users);
    })
}
function addTrajectory(studentId,stage,steps){
    return new Promise(async(resolve,reject)=>{
        const trajectory = {studentId,stage,steps};
        const newTrajectory = await store.addTrajectory(trajectory);
        resolve(newTrajectory);
    })
}
function getTrajectory(filter){
    return new Promise(async(resolve,reject)=>{
        const arrayOfTrajectory = await store.listTrajectory(filter)
        resolve(arrayOfTrajectory)
    })
}
function updateTrajectory(stage_id,steps){
    return new Promise(async(resolve,reject)=>{
        const updatedTrajectory = await store.addStepsToTrajectory(stage_id,steps)
        console.log(updatedTrajectory);
        resolve(updatedTrajectory)
    })
}
module.exports = {addUser,getUser,addTrajectory,getTrajectory,updateTrajectory}