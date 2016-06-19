import {
  props as rProps,
  curry,
  invoker,
  map,
  flip,
} from 'ramda';

import { iOrR } from './helpers';

const get = invoker(1, 'get');

const props = curry((keys, target) => iOrR(t => map(flip(get)(t), keys), rProps(keys), target));

export default props;
