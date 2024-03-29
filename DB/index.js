const dotenv = require('dotenv');
const mongoose = require( 'mongoose');
const bodyParser = require( 'body-parser');
const express = require('express');
const cors = require('cors');
const userRoute = require( './routers/UserRoute.js'); 

const app = express();
//secure the mongodb connection
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

// Calling a connection.js file
require('./connection');
app.use(express.json());

// Size of the downloaded images are limited
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

// Set up user route
app.use('/api/user', userRoute); 

// Routes middleware
app.use(cors());

// USER controller for get and post requests 
const UserController = require('./controllers/UserControllers.js');

// Get request for user to recieve information from db
app.get("/users", UserController.all);
app.get("/users/:username", UserController.find);
app.get("/users/email/:email", UserController.findByEmail);
// Post request to create user
app.post("/users/create", UserController.create);

app.listen(PORT, ()=>console.log(`Connected to the server ${PORT}`));