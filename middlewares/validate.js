const {response,request}= require('express');
const jwt               = require('jsonwebtoken');
const Model             = require('../components/user/model');

const validateJWT = (rolArray)=>{
    return async(req=request,res=response,next)=>{
        const token = req.header('x-token')
        if(!token){return res.status(401).json({msg:'There is no token'})}
        try{
            const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY)
            const user = await Model.findById(uid);
            if(!user || user.state==="deleted"){
                return res.status(401).json({msg:'Invalid Token or Disabled User'})
            }
            let permission = false;
            if(rolArray){
                rolArray.map(rol=>{
                    if(rol===user.rol){ permission=true }
                })
            } else { permission = true }
            if(!permission){
                return res.status(401).json({msg:"You don't have permission for this operation"})
            }
            req.user= user;
            next();
        } catch(error) {
            res.status(401).json({error,msg:"Something went wrong"})
        }
    }
}
module.exports = {
    validateJWT
}