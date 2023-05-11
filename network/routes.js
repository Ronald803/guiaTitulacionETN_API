const login     = require('../components/login/network');
const user      = require('../components/user/network'); 
const step      = require('../components/step/network');
const stage     = require('../components/stage/network.stage');
const trajectory= require('../components/trajectory/network.trajectory');

const routes = function(server){
    server.use('/api/login',login);
    server.use('/api/user',user);
    server.use('/api/step',step);
    server.use('/api/stage',stage);
    server.use('/api/trajectory',trajectory);
}

module.exports = routes