'use strict';

/**
 * @ngdoc service
 * @name lavifrfrApp.articleService
 * @description
 * # articleService
 * Service in the lavifrfrApp.
 */
angular.module('blog2App')
  .controller('DeleteArticleCtrl', function ($http, $location, $routeParams){
  	var paramId = $routeParams.id;

	$http.delete('http://127.0.0.1:8080/public/article/'+paramId+'/delete')
	.then(function(response){
	});
	location.reload();
	$location.path('/admin/articles/');
  });