/* eslint-env mocha */

import chai from 'chai';
import { propOr } from '../src/index';
import 'babel-polyfill';
import { Map } from 'immutable';
chai.should();

describe('propOr', () => {
  it('should etiher return the found prop value or the supplied default value', () => {
    propOr('alt: a', 'a', Map({ a: 'a' })).should.equal('a');
    propOr('alt: a', 'a', Map({ b: 'b' })).should.equal('alt: a');
    propOr('alt: a', 'a', { a: 'a' }).should.equal('a');
    propOr('alt: a', 'a', { b: 'b' }).should.equal('alt: a');
  });
});
