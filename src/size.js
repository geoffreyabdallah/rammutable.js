import {
  length,
  keys,
  compose,
  ifElse,
  prop,
} from 'ramda';
import { iOrR } from './helpers';

const mapSize = prop('size');

const size = map => iOrR(
  mapSize,
    ifElse(
      Array.isArray,
        length,
      compose(length, keys)
    ),
  map);

export default size;
