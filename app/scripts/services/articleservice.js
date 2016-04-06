'use strict';

/**
 * @ngdoc service
 * @name lavifrfrApp.articleService
 * @description
 * # articleService
 * Service in the lavifrfrApp.
 */
angular.module('blog2App')
  .service('articleService', function ($http, $routeParams){
	var paramId = $routeParams.id;

	this.editArticleFunc = function(title, contenu, tag){
		var article = {
				'id': paramId,
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
			data: JSON.stringify(article)
		})
		.success(function(response){
			return response;
		})
		.error(function(response){
			return response;
		});
	};
		
	this.addArticleFunc = function(title, contenu, tag){
		var article = {'title': title,
				'contenu': contenu,
				'tag': tag
			};
		return $http({
			method: 'POST',
			url: 'http://127.0.0.1:8080/public/article',
			headers: {
				'Content-Type': 'application/json'
			},
			dataType: 'json',
			data: JSON.stringify(article)
		})
		.success(function(response){
			return response;
		})
		.error(function(response){
			return response;
		});
	};
  });
