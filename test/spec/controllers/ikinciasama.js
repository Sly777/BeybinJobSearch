'use strict';

describe('Controller: IkinciasamaCtrl', function () {

  // load the controller's module
  beforeEach(module('facebookHrApp'));

  var IkinciasamaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IkinciasamaCtrl = $controller('IkinciasamaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
