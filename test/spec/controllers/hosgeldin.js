'use strict';

describe('Controller: HosgeldinCtrl', function () {

  // load the controller's module
  beforeEach(module('facebookHrApp'));

  var HosgeldinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HosgeldinCtrl = $controller('HosgeldinCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
