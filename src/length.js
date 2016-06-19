import {
  length as rLength,
  prop,
} from 'ramda';
import { iOrR } from './helpers';

const size = prop('size');

const length = list => iOrR(size, rLength, list);

export default length;
