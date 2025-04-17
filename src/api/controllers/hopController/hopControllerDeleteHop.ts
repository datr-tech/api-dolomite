import { Types } from 'mongoose';
import { HopModel } from '@app/api/models';

export const hopControllerDeleteHop = async ({ hopId }) => {
  const res = await HopModel.findOneAndUpdate(
    {
      _id: hopId,
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
