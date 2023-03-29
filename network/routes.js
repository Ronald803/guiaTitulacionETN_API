const login = require('../components/login/network')

const routes = function(server){
    server.use('/api/login',login);
    server.use('/api/user',(req,res)=>{
        res.send('petición a user')
    })
}

module.exports = routes