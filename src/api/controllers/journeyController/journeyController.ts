import { journeyControllerCreateJourney } from './journeyControllerCreateJourney';
import { journeyControllerDeleteJourney } from './journeyControllerDeleteJourney';
import { journeyControllerReadJourney } from './journeyControllerReadJourney';
import { journeyControllerUpdateJourney } from './journeyControllerUpdateJourney';

export const journeyController = {
  createJourney: journeyControllerCreateJourney,
  deleteJourney: journeyControllerDeleteJourney,
  readJourney: journeyControllerReadJourney,
  updateJourney: journeyControllerUpdateJourney,
};
