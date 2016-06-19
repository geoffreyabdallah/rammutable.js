/* eslint-env mocha */

import chai from 'chai';
import { path } from '../src/index';
import 'babel-polyfill';
import { fromJS } from 'immutable';
chai.should();

describe('path', () => {
  it('should return the value at a given keypath', () => {
    path(['a', 'b'], fromJS({ a: { b: 'b' } })).should.equal('b');
    path(['a', 'b'], { a: { b: 'b' } }).should.equal('b');
  });
});
