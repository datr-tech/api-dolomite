import { IJourneyTypeControllerUpdateJourneyTypeOutputError } from './IJourneyTypeControllerUpdateJourneyTypeOutputError';
import { IJourneyTypeControllerUpdateJourneyTypeOutputSuccess } from './IJourneyTypeControllerUpdateJourneyTypeOutputSuccess';

export type IJourneyTypeControllerUpdateJourneyTypeOutput =
  | IJourneyTypeControllerUpdateJourneyTypeOutputSuccess
  | IJourneyTypeControllerUpdateJourneyTypeOutputError;
