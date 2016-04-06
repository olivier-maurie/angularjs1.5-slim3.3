'use strict';

/**
 * @ngdoc function
 * @name blog2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blog2App
 */
angular.module('blog2App')
  .controller('articleCtrl', function ($http, $scope, $routeParams) {
    var paramId = $routeParams.id;
		$http({
			method: 'GET',
			url: 'http://127.0.0.1:8080/public/article/' + paramId + '/get'
		})
		.success(function(response){
			document.title = response[0].title + ' | LaviFR';
			$scope.article = response[0];
		});
  });
