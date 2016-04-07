'use strict';

/**
 * @ngdoc function
 * @name lavifrfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lavifrfrApp
 */
angular.module('blog2App')
	.controller('EditArticleCtrl', function($scope, $http, articleService){
	document.title = "Edition"

	$http({
		method: "GET",
		url: "http://127.0.0.1:8080/public/tags"
	})
	.then(function(response){
		$scope.tags = response.data;
	});

	console.log('ok');

	$scope.editArticle = function(response){
		articleService.editArticleFunc($scope.title, $scope.contenu, $scope.tag)
		.success(function(response){
			console.log(response);
			console.log('ok');
			alert('Modification enregistré');
		});
	};

});