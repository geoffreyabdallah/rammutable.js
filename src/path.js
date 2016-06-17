import {
  path as rPath,
  curry,
  invoker,
} from 'ramda';
import { iOrR } from './helpers';

const getIn = invoker(1, 'getIn');

const path = curry((kPath, target) => iOrR(getIn(kPath), rPath(kPath), target));

export default path;
