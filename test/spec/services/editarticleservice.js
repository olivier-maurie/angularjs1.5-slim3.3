'use strict';

describe('Service: editArticleService', function () {

  // load the service's module
  beforeEach(module('blog2App'));

  // instantiate service
  var editArticleService;
  beforeEach(inject(function (_editArticleService_) {
    editArticleService = _editArticleService_;
  }));

  it('should do something', function () {
    expect(!!editArticleService).toBe(true);
  });

});
