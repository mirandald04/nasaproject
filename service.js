var app = angular.module("MyApp");

app.service("HttpService", ["$http", function ($http) {
	this.getInfo = function (type, dateSpace) {
		var params = type+dateSpace+"&api_key=";
		console.log(params);
		return $http.get("http://localhost:5000/api/" + encodeURIComponent(params)).then(function (response) {
			return response;
		})
	}

}])


//http://www.opensecrets.org/api/?method=getLegislators&id=NJ&apikey=d4f7d189f2ac5f9e4cfe6df11d556e35

//https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY