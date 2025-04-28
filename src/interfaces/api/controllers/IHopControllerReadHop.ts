import { IHopControllerReadHopInput } from './IHopControllerReadHopInput';
import { IHopControllerReadHopOutput } from './IHopControllerReadHopOutput';

export interface IHopControllerReadHop {
  (args: IHopControllerReadHopInput): Promise<IHopControllerReadHopOutput>;
}
