require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Setting
app.set('port', process.env.PORT || 5001);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Folders static
app.use('/public', express.static(path.join(__dirname, '../client/public')));
app.use('/modules', express.static(path.join(__dirname, '../../node_modules')));
let appStaticAssetsPath = path.join(__dirname, '../client/build');
//Routes
//Routes Client
require('../router/router-client')(express, app, appStaticAssetsPath);
//Routes Api
app.use('/api/crud', require('../router/router-server'));

app.listen(app.get('port'), () => {
    console.log("server run port " + app.get('port'));
})