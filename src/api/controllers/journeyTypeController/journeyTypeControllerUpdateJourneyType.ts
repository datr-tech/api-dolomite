import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyTypeControllerUpdateJourneyType,
  IJourneyTypeControllerUpdateJourneyTypeOutputError,
  IJourneyTypeControllerUpdateJourneyTypeOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * journeyTypeControllerUpdateJourneyType
 *
 * The dolomite API update journeyType controller.
 *
 * @param { IJourneyTypeControllerUpdateJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IJourneyTypeControllerUpdateJourneyTypeOutput> }
 * @returns { Promise<IJourneyTypeControllerUpdateJourneyTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyTypeControllerUpdateJourneyTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyTypeControllerUpdateJourneyType: IJourneyTypeControllerUpdateJourneyType =
  async ({ journeyTypeId, payload }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'JourneyTypeModel'
       * using the received 'journeyTypeId' param.
       * When successful, update the found model using
       * the key value pairs (or fields) from within the
       * 'payload' param.
       */
      await JourneyTypeModel.findOneAndUpdate(
        {
          _id: journeyTypeId,
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
        journeyTypeId,
        responseStatusCode: 200,
      };

      /*
       * Cast the response object to 'IJourneyTypeControllerUpdateJourneyTypeOutputSuccess',
       * where the casting interface is a component of the binary union type
       * 'IJourneyTypeControllerUpdateJourneyTypeOutput'.
       */
      return stat as IJourneyTypeControllerUpdateJourneyTypeOutputSuccess;
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
       * Cast the response object to 'IJourneyTypeControllerUpdateJourneyTypeOutputError',
       */
      return stat as IJourneyTypeControllerUpdateJourneyTypeOutputError;
    }
  };
