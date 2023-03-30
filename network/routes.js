const login     = require('../components/login/network')
const user      = require('../components/user/network') 

const routes = function(server){
    server.use('/api/login',login);
    server.use('/api/user',user);
}

module.exports = routes