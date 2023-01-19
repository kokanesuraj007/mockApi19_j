"use strict";

var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  email: String,
  password: String
});
var UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel: UserModel
};
//# sourceMappingURL=User.model.dev.js.map
