import { IJourneyTypeControllerDeleteJourneyTypeInput } from "./IJourneyTypeControllerDeleteJourneyTypeInput";
import { IJourneyTypeControllerDeleteJourneyTypeOutput } from "./IJourneyTypeControllerDeleteJourneyTypeOutput";

export interface IJourneyTypeControllerDeleteJourneyType {
	(args: IJourneyTypeControllerDeleteJourneyTypeInput): Promise<IJourneyTypeControllerDeleteJourneyTypeOutput>;
}
