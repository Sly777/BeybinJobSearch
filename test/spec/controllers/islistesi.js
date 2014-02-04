'use strict';

describe('Controller: IslistesiCtrl', function () {

  // load the controller's module
  beforeEach(module('facebookHrApp'));

  var IslistesiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IslistesiCtrl = $controller('IslistesiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
