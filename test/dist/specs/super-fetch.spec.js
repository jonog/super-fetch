(function() {
  'use strict';
  var superfetch;

  superfetch = source("super-fetch");

  describe("basic implementation", function() {
    it('fetches the key from the cache after the first time', function(done) {
      return done('pending');
    });
    it('adds a custom namespace if provided', function(done) {
      return done('pending');
    });
    return it('removes all keys from namespace', function(done) {
      return done('pending');
    });
  });

  describe("next features", function() {
    it('stores arrays as redis arrays or sets', function(done) {
      return done('pending');
    });
    return it('stores arrays of hashes & creates optional patterns for fast querying, using multi & lua as required', function(done) {
      return done('pending');
    });
  });

}).call(this);
