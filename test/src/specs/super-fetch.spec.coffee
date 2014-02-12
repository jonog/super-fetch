'use strict';

superfetch = source("super-fetch")

describe "basic implementation", ->
  it 'fetches the key from the cache after the first time', (done) -> done 'pending'
  it 'adds a custom namespace if provided', (done) -> done 'pending'
  it 'removes all keys from namespace', (done) -> done 'pending'

describe "next features", ->
  it 'stores arrays as redis arrays or sets', (done) -> done 'pending'
  it 'stores arrays of hashes & creates optional patterns for fast querying, using multi & lua as required', (done) -> done 'pending'
