import { IHopControllerDeleteHopInput } from "./IHopControllerDeleteHopInput";
import { IHopControllerDeleteHopOutput } from "./IHopControllerDeleteHopOutput";

export interface IHopControllerDeleteHop {
	(args: IHopControllerDeleteHopInput): Promise<IHopControllerDeleteHopOutput>;
}
