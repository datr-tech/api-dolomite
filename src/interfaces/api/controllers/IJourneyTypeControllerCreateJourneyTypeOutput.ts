import { IJourneyTypeControllerCreateJourneyTypeOutputError } from './IJourneyTypeControllerCreateJourneyTypeOutputError';
import { IJourneyTypeControllerCreateJourneyTypeOutputSuccess } from './IJourneyTypeControllerCreateJourneyTypeOutputSuccess';

export type IJourneyTypeControllerCreateJourneyTypeOutput =
  | IJourneyTypeControllerCreateJourneyTypeOutputSuccess
  | IJourneyTypeControllerCreateJourneyTypeOutputError;
