'use strict';

describe('Controller: IletisimCtrl', function () {

  // load the controller's module
  beforeEach(module('facebookHrApp'));

  var IletisimCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IletisimCtrl = $controller('IletisimCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
