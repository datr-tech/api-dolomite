import { IHopControllerUpdateHopOutputError } from './IHopControllerUpdateHopOutputError';
import { IHopControllerUpdateHopOutputSuccess } from './IHopControllerUpdateHopOutputSuccess';

export type IHopControllerUpdateHopOutput =
  | IHopControllerUpdateHopOutputSuccess
  | IHopControllerUpdateHopOutputError;
