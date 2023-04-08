const bcrypt    = require('bcryptjs')
const storeUser = require('../user/store')
const jwt       = require('jsonwebtoken')

function login(email,password){
    return new Promise( async (resolve,reject)=>{
        if(!email || !password){return reject('Incomplete Data')}
        //________________ Checking email exists ______________________
        const user = await storeUser.list({email})
        if(user.length<1){return reject('Incorrect Information')}
        //_____________________________________________________________
        //________________ Checking password is correct _______________
        const validPassword = bcrypt.compareSync(password,user[0].password)
        if(!validPassword){ return reject('Incorrect Information')}
        //________________ Generating jwtoken _________________________
        const payload = {uid: user[0]._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: user[0].name,
            rol: user[0].rol,
            token
        })
    } )
}

module.exports = {login}