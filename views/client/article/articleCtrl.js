angular.module('appBlog.controller.articleCtrl', [])
.controller('articleCtrl', function($http, $scope, $routeParams){
	var paramId = $routeParams.id;
	$http({
		method: 'GET',
		url: 'http://127.0.0.1:8080/public/article/' + paramId + '/get'
	})
	.success(function(response){
		document.title = response[0].title + ' | LaviFR';
		$scope.article = response[0];
		$scope.article.title = response[0].title;
		$scope.article.contenu = response[0].contenu;
		$scope.article.tag = response[0].tag;
	});
});