// uses express, method-override, and body-parser npms
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;

// serve static content for the app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

// set handlebars
var hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import routes with server access

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(port);