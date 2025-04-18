import { JourneyModel } from '@app/api/models';
import { Types } from 'mongoose';

export const journeyControllerDeleteJourney = async ({ journeyId }) => {
  const res = await JourneyModel.findOneAndUpdate(
    {
      _id: journeyId,
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
