import { IJourneyControllerCreateJourneyOutputError } from './IJourneyControllerCreateJourneyOutputError';
import { IJourneyControllerCreateJourneyOutputSuccess } from './IJourneyControllerCreateJourneyOutputSuccess';

export type IJourneyControllerCreateJourneyOutput =
  | IJourneyControllerCreateJourneyOutputSuccess
  | IJourneyControllerCreateJourneyOutputError;
