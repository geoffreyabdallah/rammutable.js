import {
  length,
  keys,
  compose,
  cond,
  T,
  prop,
} from 'ramda';
import { iOrR } from './helpers';

const mapSize = prop('size');

const size = map => iOrR(
  mapSize,
    cond([
      [Array.isArray, length],
      [T, compose(length, keys)],
    ]),
  map);

export default size;
