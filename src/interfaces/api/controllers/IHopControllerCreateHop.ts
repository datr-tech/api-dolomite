import { IHopControllerCreateHopInput } from './IHopControllerCreateHopInput';
import { IHopControllerCreateHopOutput } from './IHopControllerCreateHopOutput';

export interface IHopControllerCreateHop {
  (args: IHopControllerCreateHopInput): Promise<IHopControllerCreateHopOutput>;
}
