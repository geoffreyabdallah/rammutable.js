import {
  assocPath as rAssocPath,
  curry,
  invoker,
} from 'ramda';
import { iOrR } from './helpers';

const setIn = invoker(2, 'setIn');

const assocPath = curry((kPath, v, target) => iOrR(setIn(kPath, v), rAssocPath(kPath, v), target));

export default assocPath;
