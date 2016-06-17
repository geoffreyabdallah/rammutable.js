import {
  length as rLength,
  invoker,
} from 'ramda';
import { iOrR } from './helpers';

const size = invoker(0, 'size');

const length = list => iOrR(size, rLength, list);

export default length;
