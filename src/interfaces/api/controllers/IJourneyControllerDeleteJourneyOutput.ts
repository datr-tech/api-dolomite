import { IJourneyControllerDeleteJourneyOutputError } from './IJourneyControllerDeleteJourneyOutputError';
import { IJourneyControllerDeleteJourneyOutputSuccess } from './IJourneyControllerDeleteJourneyOutputSuccess';

export type IJourneyControllerDeleteJourneyOutput =
  | IJourneyControllerDeleteJourneyOutputSuccess
  | IJourneyControllerDeleteJourneyOutputError;
