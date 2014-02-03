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
      .when('/ikinciAsama', {
        templateUrl: 'views/ikinciasama.html',
        controller: 'IkinciasamaCtrl'
      })
      .when('/isListesi', {
        templateUrl: 'views/islistesi.html',
        controller: 'IslistesiCtrl'
      })
      .when('/iletisim', {
        templateUrl: 'views/iletisim.html',
        controller: 'IletisimCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
