import { JourneyModel } from '@api-dolomite/api/models';

export const journeyControllerReadJourney = async ({ journeyId }) => {
  const journey = await JourneyModel.findById(journeyId);

  return journey;
};
