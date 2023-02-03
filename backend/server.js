const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const plantRouter = require('./routes/plantRouter');
const gardenRouter = require('./routes/garden');
const usersRouter = require('./routes/user');

require('dotenv').config(); //configures to allow you to have the env variables in the dotenv file 

const app = express();
const port = process.env.PORT || 5000; //creates express server with a defined port number

app.use(cors());
app.use(express.json()); //middleware - allows server to parse JSON when sending a receiving requests

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

// routes
app.use('/home', plantRouter)
app.use('/', usersRouter);
app.use('/garden', gardenRouter)

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`); //starts the server on the specified port
});

