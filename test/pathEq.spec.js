/* eslint-env mocha */

import chai from 'chai';
import { pathEq } from '../src/index';
import 'babel-polyfill';
import { fromJS } from 'immutable';
chai.should();

describe('pathEq', () => {
  it('should return whether or not a value equals a value at a given keypath', () => {
    pathEq(['a', 'b'], 'b', fromJS({ a: { b: 'b' } })).should.be.true;
    pathEq(['a', 'b'], 'b', { a: { b: 'b' } }).should.be.true;
  });
});
