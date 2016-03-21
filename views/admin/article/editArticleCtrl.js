angular.module('appBlog.controller.editArticleCtrl', [])
.controller('editArticleCtrl', function($scope, $location, $http, articleService){
	document.title = "Edition"

	$http({
		method: "GET",
		url: "http://127.0.0.1:8080/public/tags"
	})
	.then(function(response){
		$scope.tags = response.data
	});

	$scope.editArticle = function(response){
		articleService.editArticleFunc($scope.title, $scope.contenu, $scope.tag)
		.then(function(response){
			alert('Modification enregistré');
			$location.path('/admin/article');
		})
	}
});