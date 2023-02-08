var mongoose = require('mongoose');
require("dotenv").config();

beforeAll(function (done) {
    mongoose.connect("mongodb+srv://Anthony-O:CC8txqzZ16v2lcra@cluster0.61xuyqe.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.on("open", function () {
      done();
    });
  });

  afterAll(function (done) {
    mongoose.connection.close(true, function () {
      done();
    });
});