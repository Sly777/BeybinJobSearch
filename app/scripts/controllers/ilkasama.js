'use strict';

angular.module('facebookHrApp').controller('IlkasamaCtrl', function ($scope, FacebookSvc, $cookieStore, $location) {
  $scope.loginStatus = 0;
  $scope.checkLogin = function () {
    FB.getLoginStatus(function (response) {
      if(response.status == 'connected') {
        FacebookSvc.getYourData().then(function(resp){
          $cookieStore.put('yourdata', resp);
          $scope.loginStatus = 1;
        }, function() {
          $location.path('/');
        });
      } else {
        FB.login(function(response){
          if (response.authResponse) {
            FacebookSvc.getYourData().then(function(resp){
              $cookieStore.put('yourdata', resp);
              $scope.loginStatus = 1;
            });
          } else {
            $scope.loginStatus = 2;
          }
        }, {
          scope: 'user_friends, friends_status, user_status'
        });
      }
    });
  };
});