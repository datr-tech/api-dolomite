import { JourneyTypeModel } from '@app-ad/api/models';

export const seederJourneyTypeModel = async () => {
  const adminStatusId = '6818938030229b2b8f520c4d';
  const adminUserId = '681894071e8435a30db92abc';
  const journeyTypeId = '681893d7ad20a79e6cd39635';

  const journeyTypeModelParams = {
    journeyTypeId,
    name: 'test',
    description,
    adminStatusId,
    adminUserId,
  };
  const journeyTypeModel = new JourneyTypeModel(journeyTypeModelParams);
  await journeyTypeModel.save();
};
