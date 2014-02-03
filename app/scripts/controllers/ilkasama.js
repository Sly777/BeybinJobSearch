'use strict';

angular.module('facebookHrApp').controller('IlkasamaCtrl', function ($scope) {
  $scope.loginStatus = 0;
  $scope.checkLogin = function () {
    FB.getLoginStatus(function (response) {
      if(response.status == 'connected') {
        $scope.loginStatus = 1;
      } else {
        FB.login(function(response){
          if (response.authResponse) {
            $scope.loginStatus = 1;
          } else {
            $scope.loginStatus = 2;
          }
        }, {
          scope: 'user_friends, friends_status'
        });
      }
    });
  };
});