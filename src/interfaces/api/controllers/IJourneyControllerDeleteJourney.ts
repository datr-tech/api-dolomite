import { IJourneyControllerDeleteJourneyInput } from "./IJourneyControllerDeleteJourneyInput";
import { IJourneyControllerDeleteJourneyOutput } from "./IJourneyControllerDeleteJourneyOutput";

export interface IJourneyControllerDeleteJourney {
	(args: IJourneyControllerDeleteJourneyInput): Promise<IJourneyControllerDeleteJourneyOutput>;
}
