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
 * @returns { Promise<IJourneyControllerUpdateJourneyOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyControllerUpdateJourneyOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyControllerUpdateJourney: IJourneyControllerUpdateJourney = async ({
  journeyId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'JourneyModel'
     * using the received 'journeyId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await JourneyModel.findOneAndUpdate(
      {
        _id: journeyId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the updated model's primary key.
     */
    stat.error = false;
    stat.payload = {
      journeyId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to 'IJourneyControllerUpdateJourneyOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IJourneyControllerUpdateJourneyOutput'.
     */
    return stat as IJourneyControllerUpdateJourneyOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = {
      message,
      responseStatusCode: 404,
    };

    /*
     * Cast the response object to 'IJourneyControllerUpdateJourneyOutputError',
     */
    return stat as IJourneyControllerUpdateJourneyOutputError;
  }
};
