'use strict';

angular.module('facebookHrApp').controller('IslistesiCtrl', function ($scope, FacebookSvc, $timeout, $location) {
  $scope.friendId = 751328297;
  $scope.isListesi = [];
  FacebookSvc.getStatusesByFID(751328297).then(getAllData, function() {
    $location.path('/');
  });

  function getAllData(resp) {
    $scope.isListesi.push.apply($scope.isListesi, _.filter(resp.data, function(item) {
        item.message = item.message.toLowerCase();
        return (item.message.indexOf('sosyal medyacı') != -1) ||
          (item.message.indexOf('art director') != -1) ||
          (item.message.indexOf('.net') != -1) ||
          (item.message.indexOf('analist') != -1) ||
          (item.message.indexOf('flash developer') != -1) ||
          (item.message.indexOf('stajyer') != -1) ||
          (item.message.indexOf('haber editoru') != -1) ||
          (item.message.indexOf('product manager') != -1) ||
          (item.message.indexOf('sosyal medya') != -1) ||
          (item.message.indexOf('front-end') != -1) ||
          (item.message.indexOf('mobil developer') != -1) ||
          (item.message.indexOf('freelance') != -1) ||
          (item.message.indexOf('yazar') != -1) ||
          (item.message.indexOf('grafiker') != -1) ||
          (item.message.indexOf('jr. sm') != -1) ||
          (item.message.indexOf('sr. sm') != -1) ||
          (item.message.indexOf('yeni mezun') != -1) ||
          (item.message.indexOf('sr. tasarımcı') != -1) ||
          (item.message.indexOf('sr. html') != -1) ||
          (item.message.indexOf('game developer') != -1) ||
          (item.message.indexOf('producer') != -1) ||
          (item.message.indexOf('3d modelleme') != -1) ||
          (item.message.indexOf('ajansa arıyorum') != -1) ||
          (item.message.indexOf('iş arıyor') != -1) ||
          (item.message.indexOf('Concept Artis') != -1) ||
          (item.message.indexOf('sr. mt') != -1) ||
          (item.message.indexOf('ajans') != -1 && item.message.indexOf('lazım') != -1);
      })
    );

    if(typeof resp.paging != 'undefined' && typeof resp.paging.next != 'undefined') {
      $timeout(function() {
        FacebookSvc.getStatusesByUrl(resp.paging.next).then(getAllData);
      }, 150);
    }
  }
});
