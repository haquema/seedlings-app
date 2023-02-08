require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const plantRouter = require('./routes/plant');
const gardenRouter = require('./routes/garden');
const usersRouter = require('./routes/user');
const reminderRouter = require('./routes/reminder');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json())

app.use((req,res,next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/home', plantRouter)
app.use('/', usersRouter);
app.use('/garden', gardenRouter)
app.use('/garden/reminder',reminderRouter)


// connect to db
if (process.env.NODE_ENV === 'test') {
  mongodbUrl = process.env.TEST;
} else {
  mongodbUrl = process.env.MONGO_URI;
}

mongoose.connect(mongodbUrl)
  .then(() => {
    // listen for requests
    console.log(mongodbUrl)
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = app;
