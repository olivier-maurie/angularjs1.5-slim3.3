'use strict';

/**
 * @ngdoc overview
 * @name blog2App
 * @description
 * # blog2App
 *
 * Main module of the application.
 */
angular
  .module('blog2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'articleCtrl',
        controllerAs: 'about'
      })
      .when('/admin/overview', {
        templateUrl: 'views/admin/overview.html',
        controller: 'OverviewCtrl',
        controllerAs: 'overview'
      })
      .when('/admin/articles', {
        templateUrl: 'views/admin/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .when('/admin/articles/edit/:id', {
        templateUrl: 'views/admin/editarticle.html',
        controller: 'EditArticleCtrl',
        controllerAs: 'editarticle'
      })
      .when('/admin/articles/delete/:id', {
        templateUrl: 'views/admin/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
