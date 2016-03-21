angular.module('appBlog.service.tagService', [])
.service('tagService', function($http, $routeParams){
	var paramId = $routeParams.id;

	this.editTagFunc = function(tag){
		var tag = {
				"id": paramId,
				"tag": tag
			};
		return $http({
			method: 'PUT',
			url: 'http://127.0.0.1:8080/public/tag/' + paramId + '/edit',
			headers: {
				'Content-Type': 'application/json'
			},
			dataType: 'json',
			data: JSON.stringify(tag)
		})
		.success(function(response){
			return response;
		})
		.error(function(response){
			return response;
		})};
		
	this.addTagFunc = function(tag){
		var tag = {
				"tag": tag
			};
		return $http({
			method: 'POST',
			url: 'http://127.0.0.1:8080/public/tag',
			headers: {
				'Content-Type': 'application/json'
			},
			dataType: 'json',
			data: JSON.stringify(tag)
		})
		.success(function(response){
			return response;
		})
		.error(function(response){
			return response;
		})};
});