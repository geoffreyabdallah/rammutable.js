import {
  equals as rEquals,
  curry,
  apply,
  cond,
  all,
  any,
  compose,
  map,
  T,
  call,
} from 'ramda';
import { is } from 'immutable';
import { isImmutable, toJS } from './helpers';

const equals = curry((a, b) => {
  return call(cond([
    [all(isImmutable), apply(is)],
    [any(isImmutable), compose(
                        apply(rEquals),
                        map(toJS)
                      )],
    [T, apply(rEquals)],
  ]), [a, b]);
});

export default equals;
