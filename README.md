# super-fetch

Easily retrieve or cache the results of a function call. Storage in redis.

## Example
```
superfetch = require 'super-fetch'

cache = superfetch.create_cache(namespace: "random")

expensive_function = (key, cb) ->
  cb(null, "value")

cache.fetch "abc", expensive_function, (err, data) ->
  console.log('''===> data: ''', data)
  process.exit(0)
```

## Options
### Custom namespace:
```
superfetch.create_cache({namespace: 'twitter'})
```

### Default cache expiry:
```
superfetch.create_cache({expires_in: 'twitter'})
```

### Set key with expiry:
```
cache.set(key, data, expiry, callback)
```

## Planned additions
Use redis datastructures to implement various caching strategies for javascript objects.
E.g. store arrays of hashes & creates opt-in query patterns, optimising with multi / lua


## License
Copyright (c) 2014 . Licensed under the MIT license.
