/* eslint-env mocha */

import chai from 'chai';
import {
  iOrR,
  isImmutable,
  toJS,
  fromJS,
} from '../src/helpers';
import 'babel-polyfill';
import { Map, Iterable } from 'immutable';
chai.should();

describe('helpers', () => {
  describe('iOrR', () => {
     it('should use an Immutable.js funciton for an Immutable object, otherwise the given ramda function', () => {
       
     });
  });

  describe('isImmutable', () => {
    it('should be an alias for Immutable.js Iterable.isIterable', () => {
      return isImmutable.should.equal(Iterable.isIterable);
    });
  });

  describe('toJS', () => {
    it('should either convert an immutable datascruture to the javascript equivalent, or return a given javascript object' ,() => {
      const js = { a: 'a' };
      toJS(Map({ a: 'a' })).should.deep.equal(js);
      toJS(js).should.eq(js);
    });
  });

  describe('fromJS', () => {
    it('should either convert an javascript object to the immutable equivalent equivalent, or return a given immutable object' ,() => {
      const immu = Map({ a: 'a' });
      const fromValue = fromJS(immu);
      fromValue.should.eq(immu);
      fromJS({ a: 'a' }).toJS().should.deep.equal(immu.toJS());
    });
  });
});
