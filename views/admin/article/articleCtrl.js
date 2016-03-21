angular.module('appBlog.controller.articleCtrl', [])
.controller('articleCtrl', function($http, $scope,$routeParams, $window, articleService){
	$http({
		method: "GET",
		url: 'http://127.0.0.1:8080/public/articles'
	})
	.then(function(response) {
		$scope.articles = response.data;
		$scope.maxText = 200;
	});

	$http({
		method: "GET",
		url: "http://127.0.0.1:8080/public/tags"
	})
	.then(function(response){
		$scope.tags = response.data
	});

	$scope.addArticle = function(response){
		articleService.addArticleFunc($scope.title, $scope.contenu, $scope.tag)
		.then(function(response){
		})
	};

	var paramId = $routeParams.id;

	$http({
		method: "DELETE",
		url: "http://127.0.0.1:8080/public/article/" + paramId + '/delete'
	})
	.success(function(response){
		alert('L\'article à bien été supprimé');
		$window.location.reload();
		$location.path('/admin/article');
	});
	
});