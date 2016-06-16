import {
  curry,
} from 'ramda';
import path from './path';
import equals from './equals';

const pathEq = curry((kPath, v, target) => equals(v, path(kPath, target)));

export default pathEq;
