const express   =  require('express');
const config    = require('./config')
const router    = require('./network/routes')
const app = express();

app.use('/', function(req,res){
    res.send('Hola esta es la API de la app Guía Titulación ETN')
})
router(app);
app.listen(config.port, ()=>{
    console.log('La aplicación esta escuchando en http://localhost:'+config.port);
});
console.log('La aplicación está escuchando en http://localhost:3000');