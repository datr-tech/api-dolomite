import { JourneyTypeModel } from '@app/api/models';

export const journeyTypeControllerReadJourneyType = async ({ journeyTypeId }) => {
  const journeyType = await JourneyTypeModel.findById(journeyTypeId);

  return journeyType;
};
