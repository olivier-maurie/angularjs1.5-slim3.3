'use strict';

/**
 * @ngdoc function
 * @name lavifrfrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lavifrfrApp
 */
angular.module('blog2App')
	.controller('ArticlesCtrl', function($http, $scope, $location, articleFactory){
		
		// liste d'articles
		$scope.maxText = 200;
		articleFactory.query().$promise.then(function(data){
			$scope.articles = data;
		});

		// liste des tags
		$http({
			method: "GET",
			url: "http://127.0.0.1:8080/public/tags"
		})
		.then(function(response){
			$scope.tags = response.data
		});

		// ajout d'article
		$scope.articleData = {};
		$scope.addArticle = function(){
			var article = new articleFactory($scope.articleData);
			article.$save();
			location.reload();
		}

	});