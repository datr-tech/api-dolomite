import { journeyTypeControllerCreateJourneyType } from './journeyTypeControllerCreateJourneyType';
import { journeyTypeControllerDeleteJourneyType } from './journeyTypeControllerDeleteJourneyType';
import { journeyTypeControllerReadJourneyType } from './journeyTypeControllerReadJourneyType';
import { journeyTypeControllerUpdateJourneyType } from './journeyTypeControllerUpdateJourneyType';

export const journeyTypeController = {
  createJourneyType: journeyTypeControllerCreateJourneyType,
  deleteJourneyType: journeyTypeControllerDeleteJourneyType,
  readJourneyType: journeyTypeControllerReadJourneyType,
  updateJourneyType: journeyTypeControllerUpdateJourneyType,
};
