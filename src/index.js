const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //Para que nos de la información de las peticiones en formato dev
app.use(express.json()); //Por aquí pasarán los datos en formato JSON

//Routes
app.use('/api/tasks',require('./routes/task.routes'));
//Static files
app.use(express.static(path.join(__dirname, 'public')))
//Starting server
app.listen(app.get('port'), () => console.log(`Running on ${app.get('port')}`))