import { JourneyModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyControllerDeleteJourney,
  IJourneyControllerDeleteJourneyOutputError,
  IJourneyControllerDeleteJourneyOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * journeyControllerDeleteJourney
 *
 * The dolomite API delete journey controller.
 *
 * @param { IJourneyControllerDeleteJourneyInput } params
 * @param { Types.ObjectId } params.journeyId
 *
 * @returns { Promise<IJourneyControllerDeleteJourneyOutput> }
 * @returns { Promise<IJourneyControllerDeleteJourneyOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyControllerDeleteJourneyOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyControllerDeleteJourney: IJourneyControllerDeleteJourney = async ({
  journeyId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'JourneyModel'
     * using the received 'journeyId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    const journeyModel = await JourneyModel.findOneAndUpdate(
      {
        _id: journeyId,
      },
      {
        adminStatusId: new Types.ObjectId(),
      },
      {
        includeResultMetadata: true,
      },
    );

    /*
     * Use the standard controller response object,
     * 'stat', to return the primary key of the
     * "soft deleted" model.
     */
    stat.error = false;
    stat.payload = { journeyId };

    /*
     * Cast the response object to
     * 'IJourneyControllerDeleteJourneyOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IJourneyControllerDeleteJourneyOutput'.
     */
    return stat as IJourneyControllerDeleteJourneyOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IJourneyControllerDeleteJourneyOutputError',
     */
    return stat as IJourneyControllerDeleteJourneyOutputError;
  }
};
