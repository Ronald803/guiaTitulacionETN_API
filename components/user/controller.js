const store = require('./store')
const bcryptjs      = require('bcryptjs')

function addUser(email,password){
    return new Promise( async (resolve,reject)=>{
        //______________ encrypting password ______________
        const salt = bcryptjs.genSaltSync();
        const encryptPassword = bcryptjs.hashSync( password,salt )
        //_________________________________________________
        const newUser = {
            email,
            password: encryptPassword
        } 
        const userSaved = await store.add(newUser)
        resolve({
            msg:"add user desde controller",
            userSaved
        })
    } )
}

module.exports = {addUser}