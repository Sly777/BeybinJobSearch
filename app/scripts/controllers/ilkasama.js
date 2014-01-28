'use strict';

angular.module('facebookHrApp').controller('IlkasamaCtrl', function ($scope) {
  $scope.checkLogin = function () {
    FB.getLoginStatus(function (response) {
      if(response.status == 'connected') {
        alert('başarılı');
      } else {
        alert('başarısız');
        FB.login(function(){
          alert("Başarılı");
        }, {
          scope: 'user_friends, friends_status'
        });
      }
    });
  };
});