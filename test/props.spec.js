/* eslint-env mocha */

import chai from 'chai';
import { props } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('props', () => {
  it('should return the value at a given props', () => {
    props(['a', 'b'], Map({ a: 'a', b: 'b' })).should.deep.equal(['a', 'b']);
    props(['a'], { a: 'a' }).should.deep.equal(['a']);
  });
});
