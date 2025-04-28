import { IHopControllerReadHopOutputError } from './IHopControllerReadHopOutputError';
import { IHopControllerReadHopOutputSuccess } from './IHopControllerReadHopOutputSuccess';

export type IHopControllerReadHopOutput =
  | IHopControllerReadHopOutputSuccess
  | IHopControllerReadHopOutputError;
