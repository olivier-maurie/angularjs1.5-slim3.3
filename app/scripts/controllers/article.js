'use strict';

/**
 * @ngdoc function
 * @name blog2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blog2App
 */
angular.module('blog2App')
  .controller('articleCtrl', function ($scope, $routeParams, articleFactory) {

  	var paramId = $routeParams.id;

  	articleFactory.get({id: paramId}).$promise.then(function(data){
  		$scope.article = data[0];
  	});

  });
