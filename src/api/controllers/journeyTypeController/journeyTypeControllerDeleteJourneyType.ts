import { Types } from 'mongoose';
import { JourneyTypeModel } from '@app/api/models';

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
