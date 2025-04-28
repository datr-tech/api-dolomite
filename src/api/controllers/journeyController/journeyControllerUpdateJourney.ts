import { JourneyModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyControllerUpdateJourney,
  IJourneyControllerUpdateJourneyOutputError,
  IJourneyControllerUpdateJourneyOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * journeyControllerUpdateJourney
 *
 * The dolomite API update journey controller.
 *
 * @param { IJourneyControllerUpdateJourneyInput } params
 * @param { Types.ObjectId } params.journeyId
 * @param { Types.ObjectId } params.payload.frameworkId  (Optional)
 * @param { Types.ObjectId } params.payload.journeyTypeId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IJourneyControllerUpdateJourneyOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const journeyControllerUpdateJourney: IJourneyControllerUpdateJourney = async ({
  journeyId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    await JourneyModel.findOneAndUpdate(
      {
        _id: journeyId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    stat.error = false;
    stat.payload = { journeyId };
    return stat as IJourneyControllerUpdateJourneyOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IJourneyControllerUpdateJourneyOutputError;
  }
};
