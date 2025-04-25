import { JourneyTypeModel } from '@app-ad/api/models';
import { Types } from 'mongoose';

export const journeyTypeControllerDeleteJourneyType = async ({ journeyTypeId }) => {
  const res = await JourneyTypeModel.findOneAndUpdate(
    {
      _id: journeyTypeId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
