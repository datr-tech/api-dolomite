import { IJourneyControllerUpdateJourneyOutputError } from './IJourneyControllerUpdateJourneyOutputError';
import { IJourneyControllerUpdateJourneyOutputSuccess } from './IJourneyControllerUpdateJourneyOutputSuccess';

export type IJourneyControllerUpdateJourneyOutput =
  | IJourneyControllerUpdateJourneyOutputSuccess
  | IJourneyControllerUpdateJourneyOutputError;
