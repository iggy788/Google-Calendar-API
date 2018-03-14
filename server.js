// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

// Body Parser Middleware
// ===========================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + "/app/public"));

// Routes
// ===========================================================
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "googleeda62a26202d741a.html"));
});
// require("googleeda62a26202d741a")(app);
// require("./app/routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
