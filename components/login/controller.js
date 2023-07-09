const bcrypt    = require('bcryptjs')
const storeUser = require('../user/store')
const jwt       = require('jsonwebtoken')
const smtpServer= require('../../services/smtp/smtpServer')

function login(email,password){
    return new Promise( async (resolve,reject)=>{
        if(!email || !password){return reject('Datos incompletos')}
        //________________ Checking email exists ______________________
        const user = await storeUser.list({email})
        if(user.length<1){return reject('Información incorrecta')}
        //_____________________________________________________________
        //________________ Checking password is correct _______________
        const validPassword = bcrypt.compareSync(password,user[0].password)
        if(!validPassword){ return reject('Información incorrecta')}
        //________________ Getting trajectory __________________________
        const trajectory = await storeUser.listTrajectory({studentId:user[0]._id})
        console.log({trajectory});
        //________________ Generating jwtoken _________________________
        const payload = {uid: user[0]._id}
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        resolve({
            name: user[0].name,
            rol: user[0].rol,
            token,
            trajectory
        })
    } )
}
function sendEmailToRecoverIdentity(email){
    return new Promise(async(resolve,reject)=>{
        if(!email){return reject("Error")}
        // ________________ Verify if the email exists _____________
        const user = await storeUser.list({email})
        if(user.length < 1){return reject('Información incorrecta')}
        // ________________ Generate Token _________________________
        const payload = {email: email};
        const token = jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '4h'})
        // ________________ Send Email _____________________________
        const subject = "Recupera tu contraseña"
        const body = `
                        <h1>Click en el link</h1>
                        <a href="https://guia-titulacion-etn.netlify.app/restore-password/${token}">Recuperar mi contraseña</a>
                    `
        await smtpServer.mailer(email,subject,body)
        resolve({
            message: email,
        })
    })
}
function saveNewPassword(token,newPassword){
    return new Promise(async(resolve,reject)=>{
        if(!token || !newPassword){return reject("Faltan datos para completar esta operación")};
        // ____________ Verify if the token corresponds with an existing email ____________
        const {email} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
        if(!email){return reject("Faltan datos para completar esta operación")};
        const user = await storeUser.list({email});
        if(user.length < 1){return reject('Información incorrecta')}
        // _________________________ Encrypt the password _________________________________
        const salt = bcrypt.genSaltSync();
        const encryptPassword = bcrypt.hashSync( newPassword,salt )
        // _________________________ Save the new password ________________________________
        const updatedUser = await storeUser.storeNewPasswordDataBase(user[0]._id,encryptPassword);
        // ________________________________________________________________________________
        resolve({
            updatedUser
        })
    })
}
module.exports = {
    login, sendEmailToRecoverIdentity, saveNewPassword
}