'use strict';

/**
 * @ngdoc overview
 * @name angularAdminApp
 * @description
 * # angularAdminApp
 *
 * Main module of the application.
 */
angular
  .module('angularAdminApp', [
    'ngCookies',
    'ngRoute'
  ])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/list', {templateUrl: 'views/list.html', controller: 'ListCtrl'})
      .when('/new', {templateUrl: 'views/edit.html', controller: 'NewCtrl'})
      .when('/edit/:id', {templateUrl: 'views/edit.html', controller: 'EditCtrl'})

      .otherwise({
        redirectTo: '/'
      });
   $locationProvider.hashPrefix('!');

  }]);
