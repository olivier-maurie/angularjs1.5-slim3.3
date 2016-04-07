'use strict';

/**
 * @ngdoc function
 * @name lavifrfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lavifrfrApp
 */
angular.module('blog2App')
	.controller('ArticlesCtrl', function($http, $scope, articleService, $location){
		$http({
			method: "GET",
			url: 'http://127.0.0.1:8080/public/articles'
		})
		.then(function(response) {
			$scope.articles = response.data;
			$scope.maxText = 200;
			return $scope.articles;
		});

		$http({
			method: "GET",
			url: "http://127.0.0.1:8080/public/tags"
		})
		.then(function(response){
			$scope.tags = response.data
		});

		$scope.addArticle = function(){
			articleService.addArticleFunc($scope.title, $scope.contenu, $scope.tag)
			.then(function(response){
				location.reload();
			})
		};

	});