/* eslint-env mocha */

import chai from 'chai';
import { assoc, prop } from '../src/index';
import { compose } from 'ramda';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('assoc', () => {
  it('should set a value onto a given key for either an Immutable data structure or a JS Object', () => {
    assoc('a', 'test', {}).should.deep.equal({ a: 'test' });
    assoc('a', 'test', new Map()).toJS().should.deep.equal({ a: 'test' });
  });

  it('should be composable', () => {
    const tester = compose(
      prop('b'),
      assoc('b', 'b'),
      assoc('a', 'a')
    );
    tester(new Map()).should.equal('b');
  });
});
