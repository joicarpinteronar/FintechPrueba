const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const sqlite3 = require('sqlite3').verbose();
//const sqliteClient = new sqlite3.Database('./db/db.sqlite');
const mongodbCliente = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const databaseConfig = { 
   // "sqlite": sqliteClient, 
    "mongodb": mongodbCliente, 
    "mongodb_url": url,
    "default": 'mongodb'
};

let usersController = require('./app/controllers/users')(databaseConfig);
let clientesController = require('./app/controllers/clientes')(databaseConfig);
let administradorController = require('./app/controllers/administrador')(databaseConfig);
let solicitudCreditoController = require('./app/controllers/solcitudCredito')(databaseConfig);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//{{SERVER}}/users/
app.use('/users', usersController);
app.use('/clientes', clientesController);
app.use('/administrador', administradorController);
app.use('/solcitudCredito', solicitudCreditoController);



app.listen(3000, function () {
    console.log('Corriendo');
})