/* eslint-env mocha */

import chai from 'chai';
import { length } from '../src/index';
import 'babel-polyfill';
import { List } from 'immutable';
chai.should();

describe('length', () => {
  it('should either return a size of an immutable list or a length of an array', () => {
    length(['a', 'b']).should.equal(2);
    length(List(['a', 'b'])).should.equal(2);
  });
});
