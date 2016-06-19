import {
  props as rProps,
  curry,
  invoker,
  map,
  flip,
} from 'ramda';

import { iOrR } from './helpers';

const get = invoker(1, 'get');

const flipGet = flip(get);

const props = curry((keys, target) => iOrR(t => map(flipGet(t), keys), rProps(keys), target));

export default props;
