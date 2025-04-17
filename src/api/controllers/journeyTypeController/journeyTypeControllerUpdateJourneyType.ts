import { JourneyTypeModel } from '@app/api/models';

export const journeyTypeControllerUpdateJourneyType = async ({ journeyTypeId, payload }) => {
  const res = await JourneyTypeModel.findOneAndUpdate(
    {
      _id: journeyTypeId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
