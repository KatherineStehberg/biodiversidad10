"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var authRouter = require("./routes/auth");
var pageRouter = require("./routes/pages");
var projectRouter = require("./routes/projects");
var userRouter = require("./routes/users");
var serviceRouter = require("./routes/services");
var app = express();
var PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/api/auth", authRouter);
app.use("/api/pages", pageRouter);
app.use("/api/projects", projectRouter);
app.use("/api/users", userRouter);
app.use("/api/services", serviceRouter);
app.listen(PORT, function () {
  console.log("Servidor backend corriendo en http://localhost:".concat(PORT));
});
module.exports = app;