angular.module('appBlog.controller.tagCtrl', [])
.controller('tagCtrl', function($http, $scope, $routeParams, $location, tagService){
	var paramId = $routeParams.id;

	$http({
		method: 'GET',
		url: 'http://127.0.0.1:8080/public/tags'
	})
	.then(function(response){
		$scope.tags = response.data;
	});

	$http({
		method: 'DELETE',
		url: 'http://127.0.0.1:8080/public/tag/' + paramId + '/delete'
	});

	$scope.addTag = function(response){
		tagService.addTagFunc($scope.tag)
		.then(function(response){
			$location.path('/');
		});
	};
});