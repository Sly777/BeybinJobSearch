'use strict';

angular.module('facebookHrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ilkAsama', {
        templateUrl: 'views/ilkasama.html',
        controller: 'IlkasamaCtrl'
      })
      .when('/', {
        templateUrl: 'views/hosgeldin.html',
        controller: 'HosgeldinCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
