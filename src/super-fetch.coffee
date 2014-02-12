###
 * super-fetch
 * https://github.com/jonog/super-fetch
 *
 * Copyright (c) 2014
 * Licensed under the MIT license.
###

redis = require('redis')

'use strict';

class SuperFetch

  _namespace = null

  constructor: (@options) ->
    _namespace = @options?.namespace || 'sf'

  set_namespace: (ns) ->
    _namespace = ns

  _get: (key, cb) ->
    key = "#{_namespace}:#{key}"
    redis.createClient().get key, (err, data) ->
      return cb(err) if err?
      return cb(null, null) if !data?
      cb null, JSON.parse(data)

  _set: (key, data, cb) ->
    key = "#{_namespace}:#{key}"
    redis.createClient().set key, JSON.stringify(data), ->
      cb null, data

  fetch: (key, func, cb) =>
    @_get key, (err, data) =>
      return cb(err) if err?
      return cb(null, data) if data?
      func key, (err, data) =>
        return cb(err) if err?
        @_set key, data, cb

exports.create_cache = (options) ->
  obj = new SuperFetch(options)
