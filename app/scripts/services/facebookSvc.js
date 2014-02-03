'use strict';

angular.module('facebookHrApp').service('FacebookSvc', function Checkisfriend($q, $rootScope) {
  return {
    isYourFriend: function(friendId) {
      return this.fbCall('/me/friends/' + friendId);
    },
    fbCall: function (url) {
      var deferred = $q.defer();

      FB.api(url, function (response) {
        $rootScope.$apply(function() {
          if (response && !response.error) {
            deferred.resolve(response);
          }
          deferred.reject(response.error);
        });
      });

      return deferred.promise;
    },
    getStatusesByFID: function(friendId) {
      return this.fbCall('/' + friendId + '/statuses?fields=from,id,message,updated_time');
    },
    getStatusesByUrl: function(url) {
      var parser = document.createElement('a');
      parser.href = url;
      return this.fbCall(parser.pathname + parser.search + parser.hash);
    }
  };
});
