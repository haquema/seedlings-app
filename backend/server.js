const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const plantRouter = require('./routes/plantRouter')

require('dotenv').config(); //configures to allow you to have the env variables in the dotenv file 

const app = express();
const port = process.env.PORT || 5000; //creates express server with a defined port number

app.use(cors());
app.use(express.json()); //middleware - allows server to parse JSON when sending a receiving requests

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// routes
app.use('/home', plantRouter)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// routes
const usersRouter = require('./routes/user');
app.use('/user', usersRouter);
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`); //starts the server on the specified port
});

