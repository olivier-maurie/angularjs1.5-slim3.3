'use strict';

/**
 * @ngdoc function
 * @name lavifrfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lavifrfrApp
 */
angular.module('blog2App')
	.controller('EditArticleCtrl', function($scope, $http, $location, $routeParams, articleFactory){
	document.title = "Edition";
	var paramId = $routeParams.id;

	$http({
		method: "GET",
		url: "http://127.0.0.1:8080/public/tags"
	})
	.then(function(response){
		$scope.tags = response.data;
	});

	$scope.articleData = {};

	$scope.editArticle = function(){
		var article = new articleFactory($scope.articleData);
		article.$update({id: paramId});
		location.reload();
		$location.path('/admin/articles');
	};
});