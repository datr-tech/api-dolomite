import { IHopControllerUpdateHopInput } from "./IHopControllerUpdateHopInput";
import { IHopControllerUpdateHopOutput } from "./IHopControllerUpdateHopOutput";

export interface IHopControllerUpdateHop {
	(args: IHopControllerUpdateHopInput): Promise<IHopControllerUpdateHopOutput>;
}
