/* eslint-env mocha */

import chai from 'chai';
import {
  iOrR,
  isImmutable,
  toJS,
  fromJS,
} from '../src/helpers';
import 'babel-polyfill';
import { Iterable } from 'immutable';
chai.should();

describe('helpers', () => {
  // describe('iOrR', () => {
  //    it('should use an Immutable.js funciton for an Immutable object, otherwise the given ramda function', () => {
  //      
  //    })
  // });

  describe('isImmutable', () => {
    it('should be an alias for Immutable.js Iterable.isIterable', () => {
      return isImmutable.should.equal(Iterable.isIterable);
    });
  });

  // describe('toJS', () => {
  //   helpers.toJS
  // });

  // describe('fromJS', () => {
  //   helpers.fromJS
  // });
});
