/* eslint-env mocha */

import chai from 'chai';
import { equals } from '../src/index';
import 'babel-polyfill';
import { Map, List } from 'immutable';
chai.should();

describe('equals', () => {
  it('should handle deep equality between two Immutable data strcutures, JS objects or combination therof', () => {
    equals(['a', 'b'], List([ 'a', 'b' ])).should.be.true;
    equals(Map({ a: 'test' }), Map({ a: 'test' })).should.be.true;
    equals({ a: 'test'}, { a: 'test' }).should.be.true;
    equals({ a: 'test'}, Map({ b: 'test' })).should.be.false;
  });
});
