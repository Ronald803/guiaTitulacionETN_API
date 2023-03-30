const express   = require('express');
const cors      = require('cors');
const config    = require('./config');
const connectDB = require('./db');
const router    = require('./network/routes')
const app = express();

connectDB(config.dbUrl); //connectig to dataBase
app.use( cors() )
app.use(express.json()) // this is nessary in order to read the body of the requests
router(app);
app.listen(config.port, ()=>{
    console.log('La aplicación esta escuchando en http://localhost:'+config.port);
});
