import { IJourneyControllerCreateJourneyInput } from "./IJourneyControllerCreateJourneyInput";
import { IJourneyControllerCreateJourneyOutput } from "./IJourneyControllerCreateJourneyOutput";

export interface IJourneyControllerCreateJourney {
	(args: IJourneyControllerCreateJourneyInput): Promise<IJourneyControllerCreateJourneyOutput>;
}
