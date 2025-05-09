import { IJourneyTypeControllerDeleteJourneyTypeOutputError } from './IJourneyTypeControllerDeleteJourneyTypeOutputError';
import { IJourneyTypeControllerDeleteJourneyTypeOutputSuccess } from './IJourneyTypeControllerDeleteJourneyTypeOutputSuccess';

export type IJourneyTypeControllerDeleteJourneyTypeOutput =
  | IJourneyTypeControllerDeleteJourneyTypeOutputSuccess
  | IJourneyTypeControllerDeleteJourneyTypeOutputError;
