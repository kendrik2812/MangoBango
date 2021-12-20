const dotenv = require('dotenv');
const mongoose = require( 'mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
//secure the mongodb connection
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

//calling a connection.js file to 
require('./connection');
app.use(express.json());

//Routes middleware
app.use(cors());

app.listen(PORT, ()=>console.log(`Connected to the server ${PORT}`));