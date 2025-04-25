import { JourneyModel } from '@api-dolomite/api/models';

export const modelValidatorJourneyId = async (doc, next) => {
  let journey;
  let journeyId;

  if (doc && typeof doc.journeyId !== 'undefined') {
    journeyId = doc.journeyId;
  }

  if (journeyId) {
    journey = await JourneyModel.findById(journeyId);
  }

  if (!journey) {
    throw new Error('journeyId: invalid');
  }

  next();
};
