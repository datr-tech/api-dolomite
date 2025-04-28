import { IHopControllerCreateHopOutputError } from './IHopControllerCreateHopOutputError';
import { IHopControllerCreateHopOutputSuccess } from './IHopControllerCreateHopOutputSuccess';

export type IHopControllerCreateHopOutput =
  | IHopControllerCreateHopOutputSuccess
  | IHopControllerCreateHopOutputError;
