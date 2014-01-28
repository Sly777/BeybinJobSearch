'use strict';

describe('Service: Checkisfriend', function () {

  // load the service's module
  beforeEach(module('facebookHrApp'));

  // instantiate service
  var Checkisfriend;
  beforeEach(inject(function (_Checkisfriend_) {
    Checkisfriend = _Checkisfriend_;
  }));

  it('should do something', function () {
    expect(!!Checkisfriend).toBe(true);
  });

});
