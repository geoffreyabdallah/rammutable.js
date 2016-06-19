/* eslint-env mocha */

import chai from 'chai';
import { prop } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('prop', () => {
  it('should return the value at a given prop', () => {
    prop('a', Map({ a: 'a' })).should.equal('a');
    prop('a', { a: 'a' }).should.equal('a');
  });
});
