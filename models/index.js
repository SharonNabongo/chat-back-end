const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(
  "mongodb+srv://sharon:sharon!21@cluster0.mjs72we.mongodb.net/?retryWrites=true&w=majority",
  { keepAlive: true }
);

module.exports.User = require("./user");
