import { IJourneyControllerReadJourneyInput } from "./IJourneyControllerReadJourneyInput";
import { IJourneyControllerReadJourneyOutput } from "./IJourneyControllerReadJourneyOutput";

export interface IJourneyControllerReadJourney {
	(args: IJourneyControllerReadJourneyInput): Promise<IJourneyControllerReadJourneyOutput>;
}
