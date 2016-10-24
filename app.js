var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "HttpService", function ($scope, httpServ) {

	$scope.test = "It's working";
	$scope.type = "?date=";
	$scope.explanation = "";
	$scope.title = "";
	$scope.img = "";



	$scope.getNasa = function () {
		$scope.dateSpace = document.myDate.space.value;
		
		httpServ.getInfo($scope.type, $scope.dateSpace).then(function (response){
		
			$scope.explanation = response.data;
			$scope.title = response.data;
			$scope.img = response.data;
			return response.data.title;
			return response.data.explanation;
			return response.data.url;
		})
		
	}


}])
