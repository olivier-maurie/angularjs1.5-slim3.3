'use strict';

describe('Service: articleFactory', function () {

  // load the service's module
  beforeEach(module('blog2App'));

  // instantiate service
  var articleFactory;
  beforeEach(inject(function (_articleFactory_) {
    articleFactory = _articleFactory_;
  }));

  it('should do something', function () {
    expect(!!articleFactory).toBe(true);
  });

});
