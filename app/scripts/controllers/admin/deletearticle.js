'use strict';

/**
 * @ngdoc service
 * @name lavifrfrApp.articleService
 * @description
 * # articleService
 * Service in the lavifrfrApp.
 */
angular.module('blog2App')
  .controller('DeleteArticleCtrl', function ($http, $location, $routeParams, articleFactory){
  	var paramId = $routeParams.id;

  	articleFactory.delete({id: paramId});
  	location.reload();
	$location.path('/admin/articles/');

  });