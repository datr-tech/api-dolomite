import { JourneyModel } from '@app/api/models';
import { Types } from 'mongoose';

export const journeyControllerCreateJourney = async ({
  name,
  frameworkId,
  journeyTypeId,
  adminUserId,
  description,
  adminStatusId,
}) => {
  const journeyId = new Types.ObjectId();
  const modelParams = {
    journeyId,
    name,
    frameworkId,
    journeyTypeId,
    adminUserId,
    description,
    adminStatusId,
  };

  const journeyModel = new JourneyModel(modelParams);
  await journeyModel.save();

  return journeyModel._id;
};
