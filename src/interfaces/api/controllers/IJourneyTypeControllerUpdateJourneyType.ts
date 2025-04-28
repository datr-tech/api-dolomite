import { IJourneyTypeControllerUpdateJourneyTypeInput } from "./IJourneyTypeControllerUpdateJourneyTypeInput";
import { IJourneyTypeControllerUpdateJourneyTypeOutput } from "./IJourneyTypeControllerUpdateJourneyTypeOutput";

export interface IJourneyTypeControllerUpdateJourneyType {
	(args: IJourneyTypeControllerUpdateJourneyTypeInput): Promise<IJourneyTypeControllerUpdateJourneyTypeOutput>;
}
