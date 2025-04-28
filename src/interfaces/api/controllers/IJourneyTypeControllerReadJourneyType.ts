import { IJourneyTypeControllerReadJourneyTypeInput } from "./IJourneyTypeControllerReadJourneyTypeInput";
import { IJourneyTypeControllerReadJourneyTypeOutput } from "./IJourneyTypeControllerReadJourneyTypeOutput";

export interface IJourneyTypeControllerReadJourneyType {
	(args: IJourneyTypeControllerReadJourneyTypeInput): Promise<IJourneyTypeControllerReadJourneyTypeOutput>;
}
