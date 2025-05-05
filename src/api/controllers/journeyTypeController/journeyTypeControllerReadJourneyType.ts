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
 * @returns { Promise<IJourneyTypeControllerReadJourneyTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyTypeControllerReadJourneyTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyTypeControllerReadJourneyType: IJourneyTypeControllerReadJourneyType =
  async ({ journeyTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'JourneyTypeModel'
       * using the received 'journeyTypeId' param.
       */
      const journeyTypeModel = await JourneyTypeModel.findById(journeyTypeId);

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model.
       */
      stat.error = false;
      stat.payload = {
        journeyTypeModel,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to
       * 'IJourneyTypeControllerReadJourneyTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IJourneyTypeControllerReadJourneyTypeOutput'.
       */
      return stat as IJourneyTypeControllerReadJourneyTypeOutputSuccess;
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
       * Cast the response object to 'IJourneyTypeControllerReadJourneyTypeOutputError',
       */
      return stat as IJourneyTypeControllerReadJourneyTypeOutputError;
    }
  };
