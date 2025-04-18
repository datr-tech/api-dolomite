import { HopModel } from '@app/api/models';
import { Types } from 'mongoose';

export const hopControllerCreateHop = async ({
  name,
  description,
  order,
  journeyId,
  resourceId,
  adminUserId,
  adminStatusId,
}) => {
  const hopId = new Types.ObjectId();
  const modelParams = {
    hopId,
    name,
    description,
    order,
    journeyId,
    resourceId,
    adminUserId,
    adminStatusId,
  };

  const hopModel = new HopModel(modelParams);
  await hopModel.save();

  return hopModel._id;
};
