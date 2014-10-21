'use strict';

/**
 * @ngdoc function
 * @name angularAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAdminApp
 */
angular.module('angularAdminApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
