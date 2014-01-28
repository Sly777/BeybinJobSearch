'use strict';

describe('Controller: IlkasamaCtrl', function () {

  // load the controller's module
  beforeEach(module('facebookHrApp'));

  var IlkasamaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IlkasamaCtrl = $controller('IlkasamaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
