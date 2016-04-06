'use strict';

/**
 * @ngdoc function
 * @name blog2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blog2App
 */
angular.module('blog2App')
  .controller('MainCtrl', function ($http, $scope) {
    $http.get('http://127.0.0.1:8080/public/articles')
    .success(function(response){
    	$scope.articles = response;
    });
  });
