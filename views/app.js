angular.module('appBlog', [
	'ngRoute',
	// Client
	'appBlog.controller.accueilCtrl',
	'appBlog.controller.articleCtrl',
	// Administation
	'appBlog.controller.adminCtrl',
	'appBlog.controller.editArticleCtrl',
	'appBlog.controller.articleCtrl',
	'appBlog.controller.tagCtrl',
	'appBlog.controller.editTagCtrl',
	// // Service
	'appBlog.service.articleService',
	'appBlog.service.tagService'
	])
.run(['$rootScope', '$route', function($rootScope, $route){
  $rootScope.$on('$routeChangeSuccess', function(){
    document.title = $route.current.title;
  });
}])
.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    $routeProvider
    //Client
	.when('/', {
		title : 'Accueil | LaviFR',
		templateUrl : 'views/client/accueil/accueil.html',
		controller : 'accueilCtrl'
	})
	.when('/article/:id',{
		templateUrl : 'views/client/article/article.html',
		controller : 'articleCtrl'
	})
	//Admin
	.when('/admin',{
		title: 'Vue d\'ensemble',
		templateUrl: 'views/admin/admin/admin.html',
		controller: 'adminCtrl'
	})
	.when('/admin/article',{
		title: 'Liste des articles',
		templateUrl: 'views/admin/article/article.html',
		controller: 'articleCtrl'
	})
	.when('/admin/article/edit/:id',{
		templateUrl: 'views/admin/article/edit-article.html',
		controller: 'editArticleCtrl'
	})
	.when('/admin/article/delete/:id',{
		templateUrl: 'views/admin/article/article.html',
		controller: 'articleCtrl'
	})
	.when('/admin/tag',{
		title: 'Liste des tags',
		templateUrl: 'views/admin/tag/tag.html',
		controller: 'tagCtrl'
	})
	.when('/admin/tag/edit/:id',{
		templateUrl: 'views/admin/tag/edit-tag.html',
		controller: 'editTagCtrl'
	})
	.when('/admin/tag/delete/:id',{
		templateUrl: 'views/admin/tag/edit-tag.html',
		controller: 'tagCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
}]);