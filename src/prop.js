import {
  prop as rProp,
  curry,
  invoker,
} from 'ramda';

import { iOrR } from './helpers';

const get = invoker(1, 'get');

const prop = curry((k, target) => iOrR(get(k), rProp(k), target));

export default prop;
