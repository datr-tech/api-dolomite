import { HopModel } from '@app/api/models';

export const hopControllerUpdateHop = async ({ hopId, payload }) => {
  const res = await HopModel.findOneAndUpdate(
    {
      _id: hopId,
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
