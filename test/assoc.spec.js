/* eslint-env mocha */

import chai from 'chai';
import { assoc } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('assoc', () => {
  it('should set a value onto a given key for either an Immutable data structure or a JS Object', () => {
    assoc('a', 'test', {}).should.deep.equal({ a: 'test' });
    assoc('a', 'test', new Map()).toJS().should.deep.equal({ a: 'test' });
  });
});
