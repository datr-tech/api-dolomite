import { JourneyTypeModel } from '@app-ad/api/models';

export const modelValidatorJourneyTypeId = async (doc, next) => {
  let journeyType;
  let journeyTypeId;

  if (doc && typeof doc.journeyTypeId !== 'undefined') {
    journeyTypeId = doc.journeyTypeId;
  }

  if (journeyTypeId) {
    journeyType = await JourneyTypeModel.findById(journeyTypeId);
  }

  if (!journeyType) {
    throw new Error('journeyTypeId: invalid');
  }

  next();
};
