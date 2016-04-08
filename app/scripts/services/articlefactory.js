'use strict';

/**
 * @ngdoc service
 * @name blog2App.articleFactory
 * @description
 * # articleFactory
 * Factory in the blog2App.
 */
angular.module('blog2App')
  .factory('articleFactory', function ($resource) {
    var data = $resource('http://127.0.0.1:8080/public/articles/:id', {}, {
      'get': { method: 'GET', params:{id: '@id'}, isArray:true },
      'query': { method: 'GET', isArray:true },
      'save': { method: 'POST', headers: { 'Content-Type': 'application/json' } },
      'remove': { method: 'DELETE' },
      'update': { method: 'PUT', params:{id: '@id'} }
    });
    return data;
  });