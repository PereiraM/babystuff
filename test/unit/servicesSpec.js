'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('itemcatApp'));

  // Test service availability
  it('check the existence of Phone factory', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
});
