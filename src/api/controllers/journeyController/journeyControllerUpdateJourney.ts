import { JourneyModel } from '@app-ad/api/models';

export const journeyControllerUpdateJourney = async ({ journeyId, payload }) => {
  const res = await JourneyModel.findOneAndUpdate(
    {
      _id: journeyId,
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
