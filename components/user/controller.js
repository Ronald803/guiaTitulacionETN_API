const store     = require('./store')
const bcryptjs  = require('bcryptjs')
const jwt       = require('jsonwebtoken')

function addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password){
    return new Promise( async (resolve,reject)=>{
        if(!name || !email || !mention || !password){return reject('Incomplete Data')}
        //______________ encrypting password ______________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword = bcryptjs.hashSync( password,salt )
        //_________________________________________________
        const newUser = {
            name,username,email,professor,tutor,projectTitle,mention,courts,
            password: encryptPassword,
            state: "created",
            rol: "user",
            progress: []
        } 
        const userSaved = await store.add(newUser)
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
module.exports = {addUser,addTrajectory,getTrajectory}