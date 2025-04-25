import { HopModel } from '@api-dolomite/api/models';
import { Types } from 'mongoose';

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
