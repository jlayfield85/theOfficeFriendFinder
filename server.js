var express = require('express')
var app = express ();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
    console.log("Application listening on PORT: " + PORT);
});
