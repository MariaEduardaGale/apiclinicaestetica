const express = require ('express'); 

const path = require('path');

const db = require('./database/db'); 

const app = express();

// Configurando as rotas
const routes = require('./routes/routes');

app.use('/', routes); 

app.use(express.json()); 

app.listen(3333, () => {
    console.log('Servidor funcionando');
}); 


// app.get('/', (req, res) => {
//     res.send("Hello World"); 
// }); 