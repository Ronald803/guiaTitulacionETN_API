const login     = require('../components/login/network')
const user      = require('../components/user/network') 
const step      = require('../components/step/network')

const routes = function(server){
    server.use('/api/login',login);
    server.use('/api/user',user);
    server.use('/api/step',step)
}

module.exports = routes