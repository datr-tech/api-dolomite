import { JourneyModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyControllerReadJourney,
  IJourneyControllerReadJourneyOutputError,
  IJourneyControllerReadJourneyOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * journeyControllerReadJourney
 *
 * The dolomite API read journey controller.
 *
 * @param { IJourneyControllerReadJourneyInput } params
 * @param { Types.ObjectId } params.journeyId
 *
 * @returns { Promise<IJourneyControllerReadJourneyOutput> }
 * @returns { Promise<IJourneyControllerReadJourneyOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyControllerReadJourneyOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyControllerReadJourney: IJourneyControllerReadJourney = async ({
  journeyId,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'JourneyModel'
     * using the received 'journeyId' param.
     */
    const journeyModel = await JourneyModel.findById(journeyId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { journeyModel };

    /*
     * Cast the response object to
     * 'IJourneyControllerReadJourneyOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IJourneyControllerReadJourneyOutput'.
     */
    return stat as IJourneyControllerReadJourneyOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IJourneyControllerReadJourneyOutputError',
     */
    return stat as IJourneyControllerReadJourneyOutputError;
  }
};
