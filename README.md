# rammutable.js
Ramda interop with Immutable.js

# General
The purpose of this library is to provide general interop between Immutable.js and Ramda, while allowing for traditional use with JavaScript data structures as well. This means, you can seamlessly switch between JS and Immutable data structures while using Ramda - saving you any explicit .toJS calls (and therefor losing many of the benefits of using Immutable.js in the first place.) This library aims to allow you to continue to use Ramda without losing any of the benefits of structural sharing provided by Immutable.js (a boon if using Redux for all state management.)

# API

### assoc
Sets a value onto a given key for either an Immutable data structure or a JS Object
```javascript
  assoc('a', 'test', new Map()) // Map({ a: 'test' })
  assoc('a', 'test', {}) // { a: 'test' }
```

### assocPath
Sets a value onto a given key in a keypath for either an Immutable data structure or a JS Object'
```javascript
  assocPath(['a', 'b'], 'test', {}) // { a: { b: 'test' } }
  assocPath(['a', 'b'], 'test', new Map()) // Map({ a: { b: 'test' } })
```
### equals
  Tests deep equality between two Immutable data strcutures, JS objects or combination therof
```javascript
  equals(['a', 'b'], List([ 'a', 'b' ])) // true
  equals(Map({ a: 'test' }), Map({ a: 'test' })) // true
  equals({ a: 'test'}, { a: 'test' }) // true
  equals({ a: 'test'}, Map({ b: 'test' })) // false
```    

### length
Returns a size of an immutable list or a length of an array
```javascript
  length(['a', 'b']) // 2
  length(List(['a', 'b'])) // 2
```
### path
Returns the value at a given keypath
```javascript
  path(['a', 'b'], Immutable.fromJS({ a: { b: 'b' } })) // 'b'
  path(['a', 'b'], { a: { b: 'b' } }) // 'b'
```
### pathEq
Returns whether or not a value equals a value at a given keypath
```javascript
  pathEq(['a', 'b'], 'b', Immutable.fromJS({ a: { b: 'b' } })) // true
  pathEq(['a', 'b'], 'b', { a: { b: 'b' } }) // true
```
### prop
Returns the value at a given prop
```javascript
  prop('a', Map({ a: 'a' })) // 'a'
  prop('a', { a: 'a' }) // 'a'
```
### propEq
Returns the result of an equality test at a given prop
```javascript
  propEq('a', 'test', Map({ a: 'test' })) // true
  propEq('a', 'test', { a: 'test' }) // true
```
### props
Returns an array of values corresponding to an array of given props
```javascript
  props(['a', 'b'], Map({ a: 'a', b: 'b' })) // ['a', 'b']
  props(['a'], { a: 'a' }) // ['a']
```
### size
Retursn the size of an immutable or js data structure
```javascript
  size(['a', 'b']) // 2
  size({ a: 'a' }) // 1
  size(Map({ a: 'a'})) // 1
  size(List(['a', 'b'])) // 2
```
