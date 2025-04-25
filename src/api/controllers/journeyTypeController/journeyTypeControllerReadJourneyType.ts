import { JourneyTypeModel } from '@app-ad/api/models';

export const journeyTypeControllerReadJourneyType = async ({ journeyTypeId }) => {
  const journeyType = await JourneyTypeModel.findById(journeyTypeId);

  return journeyType;
};
