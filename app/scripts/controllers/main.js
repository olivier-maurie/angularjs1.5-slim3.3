'use strict';

/**
 * @ngdoc function
 * @name blog2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blog2App
 */
angular.module('blog2App')
  .controller('MainCtrl', function ($scope, articleFactory) {

  	articleFactory.query().$promise.then(function(data){
			$scope.articles = data;
		});

  });