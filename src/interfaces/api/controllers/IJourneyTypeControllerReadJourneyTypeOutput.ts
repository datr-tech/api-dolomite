import { IJourneyTypeControllerReadJourneyTypeOutputError } from './IJourneyTypeControllerReadJourneyTypeOutputError';
import { IJourneyTypeControllerReadJourneyTypeOutputSuccess } from './IJourneyTypeControllerReadJourneyTypeOutputSuccess';

export type IJourneyTypeControllerReadJourneyTypeOutput =
  | IJourneyTypeControllerReadJourneyTypeOutputSuccess
  | IJourneyTypeControllerReadJourneyTypeOutputError;
