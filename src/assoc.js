import {
  assoc as rAssoc,
  curry,
  invoker,
} from 'ramda';
import { iOrR } from './helpers';

const set = invoker(2, 'set');

const assoc = curry((k, v, target) => iOrR(set(k, v), rAssoc(k, v), target));

export default assoc;
