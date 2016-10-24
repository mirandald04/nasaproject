var express = require("express");
var morgan = require("morgan");
var request = require("request");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 5000;

var key = "jH1QmEYVzbmeQ0qVaps4yxI2ccNcli7bXQqt7kVy";

app.use(morgan("dev"));

app.use(function (req, res, next) {
	console.log(req.body);
	return next();
})

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.get("/api/:urlParams", function (req, res) {
	request.get({url: "https://api.nasa.gov/planetary/apod"+req.params.urlParams+key}, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body)
		}
	})

})

app.listen(port, function () {
	console.log("Reached port " + port);
})