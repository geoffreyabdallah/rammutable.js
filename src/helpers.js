import {
  curry,
  ifElse,
  call,
  identity,
  invoker,
} from 'ramda';
import Immutable from 'immutable';

const isImmutable = Immutable.Iterable.isIterable;

const toJS = ifElse(isImmutable, invoker(0, 'toJS'), identity);

const fromJS = ifElse(isImmutable, identity, x => Immutable.fromJS(x));

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
