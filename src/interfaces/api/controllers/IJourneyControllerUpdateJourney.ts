import { IJourneyControllerUpdateJourneyInput } from './IJourneyControllerUpdateJourneyInput';
import { IJourneyControllerUpdateJourneyOutput } from './IJourneyControllerUpdateJourneyOutput';

export interface IJourneyControllerUpdateJourney {
  (
    args: IJourneyControllerUpdateJourneyInput,
  ): Promise<IJourneyControllerUpdateJourneyOutput>;
}
