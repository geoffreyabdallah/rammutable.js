import {
  curry,
} from 'ramda';
import prop from './prop';
import equals from './equals';

const propEq = curry((k, v, target) => equals(v, prop(k, target)));

export default propEq;
