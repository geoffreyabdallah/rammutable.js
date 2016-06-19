/* eslint-env mocha */

import chai from 'chai';
import { size } from '../src/index';
import 'babel-polyfill';
import { Map, List } from 'immutable';
chai.should();

describe('size', () => {
  it('should either return a size of an immutable or js data structure', () => {
    size(['a', 'b']).should.equal(2);
    size({ a: 'a' }).should.equal(1);
    size(Map({ a: 'a'})).should.equal(1);
    size(List(['a', 'b'])).should.equal(2);
  });
});
