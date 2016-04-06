angular.module('appBlog.controller.accueilCtrl', [])
.controller('accueilCtrl', function($scope, $http){
	$http({
		method: "GET",
		url: 'http://127.0.0.1:8080/public/articles'
	})
	.then(function(response) {
		$scope.articles = response.data;
	});
});