"use strict";

var express = require("express");

var dotenv = require("dotenv");

dotenv.config();

var jwt = require("jsonwebtoken");

var bcrypt = require("bcrypt");

var cors = require("cors");

var port = process.env.PORT;

var _require = require("./config/db"),
    connection = _require.connection;

var _require2 = require("./models/User.model"),
    UserModel = _require2.UserModel;

var _require3 = require("./middleware/authentication"),
    authenticate = _require3.authenticate;
//# sourceMappingURL=index.dev.js.map
