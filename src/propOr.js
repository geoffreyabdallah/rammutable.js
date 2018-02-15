import {
  propOr as rPropOr,
  curry,
  invoker,
} from 'ramda';

import { iOrR } from './helpers';

const get = invoker(2, 'get');

const propOr = curry((d, k, target) => iOrR(get(k, d), rPropOr(d, k), target));

export default propOr;
