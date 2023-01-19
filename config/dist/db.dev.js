"use strict";

var mongoose = require("mongoose");

var dotenv = require("dotenv");

dotenv.config();
var url = process.env.URL;
var connection = mongoose.connect(url);
module.exports = {
  connection: connection
};
//# sourceMappingURL=db.dev.js.map
