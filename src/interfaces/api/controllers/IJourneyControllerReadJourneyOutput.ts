import { IJourneyControllerReadJourneyOutputError } from "./IJourneyControllerReadJourneyOutputError";
import { IJourneyControllerReadJourneyOutputSuccess } from "./IJourneyControllerReadJourneyOutputSuccess";

export type IJourneyControllerReadJourneyOutput = IJourneyControllerReadJourneyOutputSuccess | IJourneyControllerReadJourneyOutputError;
