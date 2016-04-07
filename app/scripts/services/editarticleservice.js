'use strict';

/**
 * @ngdoc service
 * @name blog2App.editArticleService
 * @description
 * # editArticleService
 * Service in the blog2App.
 */
angular.module('blog2App')
  .service('editArticleService', function ($http, $routeParams) {
  	var paramId = $routeParams.id;

    this.editArticleFunc = function(title, contenu, tag){
		var article = {
				'title': title,
				'contenu': contenu,
				'tag': tag
			};
		return $http({
			method: 'PUT',
			url: 'http://127.0.0.1:8080/public/article/' + paramId + '/edit',
			headers: {
				'Content-Type': 'application/json'
			},
			dataType: 'json',
			data: article
		})
		.success(function(response){
			return response;
		})
		.error(function(response){
			return response;
		});
	};
  });
