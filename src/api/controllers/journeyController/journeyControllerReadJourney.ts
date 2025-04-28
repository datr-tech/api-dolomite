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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const journeyControllerReadJourney: IJourneyControllerReadJourney = async ({
  journeyId,
}) => {
  const stat = { ...baseStat };

  try {
    const journeyModel = await JourneyModel.findById(journeyId);

    stat.error = false;
    stat.payload = { journeyModel };
    return stat as IJourneyControllerReadJourneyOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IJourneyControllerReadJourneyOutputError;
  }
};
