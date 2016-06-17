/* eslint-env mocha */

import chai from 'chai';
import { assocPath } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('assocPath', () => {
  it('should set a value onto a given key in a keypath for either an Immutable data structure or a JS Object', () => {
    assocPath(['a', 'b'], 'test', {}).should.deep.equal({ a: { b: 'test' } });
    assocPath(['a', 'b'], 'test', new Map()).toJS().should.deep.equal({ a: { b: 'test' } });
  });
});
