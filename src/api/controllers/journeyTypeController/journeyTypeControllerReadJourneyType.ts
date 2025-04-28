import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyTypeControllerReadJourneyType,
  IJourneyTypeControllerReadJourneyTypeOutputError,
  IJourneyTypeControllerReadJourneyTypeOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * journeyTypeControllerReadJourneyType
 *
 * The dolomite API read journeyType controller.
 *
 * @param { IJourneyTypeControllerReadJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
 *
 * @returns { Promise<IJourneyTypeControllerReadJourneyTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const journeyTypeControllerReadJourneyType: IJourneyTypeControllerReadJourneyType =
  async ({ journeyTypeId }) => {
    const stat = { ...baseStat };

    try {
      const journeyTypeModel = await JourneyTypeModel.findById(journeyTypeId);

      stat.error = false;
      stat.payload = { journeyTypeModel };
      return stat as IJourneyTypeControllerReadJourneyTypeOutputSuccess;
    } catch (error) {
      const { message } = error;
      stat.payload = { message };
      return stat as IJourneyTypeControllerReadJourneyTypeOutputError;
    }
  };
