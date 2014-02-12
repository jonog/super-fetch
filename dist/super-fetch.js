/*
 * super-fetch
 * https://github.com/jonog/super-fetch
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
*/


(function() {
  var SuperFetch, redis,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  redis = require('redis');

  'use strict';

  SuperFetch = (function() {
    var _namespace;

    _namespace = null;

    function SuperFetch(options) {
      var _ref;
      this.options = options;
      this.fetch = __bind(this.fetch, this);
      _namespace = ((_ref = this.options) != null ? _ref.namespace : void 0) || 'sf';
    }

    SuperFetch.prototype.set_namespace = function(ns) {
      return _namespace = ns;
    };

    SuperFetch.prototype._get = function(key, cb) {
      key = "" + _namespace + ":" + key;
      return redis.createClient().get(key, function(err, data) {
        if (err != null) {
          return cb(err);
        }
        if (data == null) {
          return cb(null, null);
        }
        return cb(null, JSON.parse(data));
      });
    };

    SuperFetch.prototype._set = function(key, data, cb) {
      key = "" + _namespace + ":" + key;
      return redis.createClient().set(key, JSON.stringify(data), function() {
        return cb(null, data);
      });
    };

    SuperFetch.prototype.fetch = function(key, func, cb) {
      var _this = this;
      return this._get(key, function(err, data) {
        if (err != null) {
          return cb(err);
        }
        if (data != null) {
          return cb(null, data);
        }
        return func(key, function(err, data) {
          if (err != null) {
            return cb(err);
          }
          return _this._set(key, data, cb);
        });
      });
    };

    return SuperFetch;

  })();

  exports.create_cache = function(options) {
    var obj;
    return obj = new SuperFetch(options);
  };

}).call(this);
