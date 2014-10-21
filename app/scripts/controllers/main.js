'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
