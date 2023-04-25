const store = require('./store')
const bcryptjs      = require('bcryptjs')

function addUser(name,username,email,professor,tutor,projectTitle,mention,courts,password){
    return new Promise( async (resolve,reject)=>{
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
        resolve({
            msg:"add user desde controller",
            userSaved
        })
    } )
}

module.exports = {addUser}