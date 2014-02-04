'use strict';

angular.module('facebookHrApp').controller('IkinciasamaCtrl', function ($scope, FacebookSvc, $location, $cookieStore) {
  $scope.itsYourFriend = 0;
  var data = $cookieStore.get('yourdata');
  if(data.id == 751328297) {
    $scope.itsYourFriend = 3;
  } else {
    FacebookSvc.isYourFriend(751328297).then(function(resp) {
      if(resp) {
        if(resp.data.length > 0) {
          $scope.itsYourFriend = 1;
        } else {
          $scope.itsYourFriend = 2;
        }
      } else {
        $scope.itsYourFriend = 2;
      }
    }, function() {
      $location.path('/');
    });
  }
});
