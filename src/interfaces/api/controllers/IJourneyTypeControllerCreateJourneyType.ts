import { IJourneyTypeControllerCreateJourneyTypeInput } from './IJourneyTypeControllerCreateJourneyTypeInput';
import { IJourneyTypeControllerCreateJourneyTypeOutput } from './IJourneyTypeControllerCreateJourneyTypeOutput';

export interface IJourneyTypeControllerCreateJourneyType {
  (
    args: IJourneyTypeControllerCreateJourneyTypeInput,
  ): Promise<IJourneyTypeControllerCreateJourneyTypeOutput>;
}
