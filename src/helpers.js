import {
  curry,
  ifElse,
  call,
  identity,
  invoker,
} from 'ramda';
import { Iterable, fromJS as iFromJS } from 'immutable';

const isImmutable = Iterable.isIterable;

const toJS = ifElse(isImmutable, invoker(0, 'toJS'), identity);

const fromJS = ifElse(isImmutable, identity, iFromJS);

const iOrR = curry((iFn, rFn, target) => call(ifElse(
  isImmutable,
    iFn,
  rFn
), target));

export {
  iOrR,
  isImmutable,
  toJS,
  fromJS,
};
