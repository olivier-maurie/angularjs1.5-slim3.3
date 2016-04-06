angular.module('appBlog.controller.editTagCtrl', [])
.controller('editTagCtrl', function($scope, tagService){
	$scope.editTag = function(response){
		tagService.editTagFunc($scope.tag)
		.then(function(response){
		});
	}
});