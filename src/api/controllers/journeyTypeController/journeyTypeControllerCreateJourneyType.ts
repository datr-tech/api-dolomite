import { Types } from 'mongoose';
import { JourneyTypeModel } from '@app/api/models';

export const journeyTypeControllerCreateJourneyType = async ({ name, description, adminStatusId, adminUserId }) => {
  const journeyTypeId = new Types.ObjectId();
  const modelParams = {
    journeyTypeId,
    name,
    description,
    adminStatusId,
    adminUserId,
  };

  const journeyTypeModel = new JourneyTypeModel(modelParams);
  await journeyTypeModel.save();

  return journeyTypeModel._id;
};
