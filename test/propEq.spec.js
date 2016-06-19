/* eslint-env mocha */

import chai from 'chai';
import { propEq } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('propEq', () => {
  it('should return the value at a given propEq', () => {
    propEq('a', 'a', Map({ a: 'a' })).should.be.true;
    propEq('a', 'a', { a: 'a' }).should.be.true;
  });
});
