import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyTypeControllerDeleteJourneyType,
  IJourneyTypeControllerDeleteJourneyTypeOutputError,
  IJourneyTypeControllerDeleteJourneyTypeOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * journeyTypeControllerDeleteJourneyType
 *
 * The dolomite API delete journeyType controller.
 *
 * @param { IJourneyTypeControllerDeleteJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
 *
 * @returns { Promise<IJourneyTypeControllerDeleteJourneyTypeOutput> }
 * @returns { Promise<IJourneyTypeControllerDeleteJourneyTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyTypeControllerDeleteJourneyTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyTypeControllerDeleteJourneyType: IJourneyTypeControllerDeleteJourneyType =
  async ({ journeyTypeId }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Attempt to find an instance of 'JourneyTypeModel'
       * using the received 'journeyTypeId' param.
       * When successful, perform a "soft delete" upon the
       * found model by updating the value of the model's
       * 'adminStatusId' field.
       */
      await JourneyTypeModel.findOneAndUpdate(
        {
          _id: journeyTypeId,
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
      stat.payload = { journeyTypeId };

      /*
       * Cast the response object to
       * 'IJourneyTypeControllerDeleteJourneyTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IJourneyTypeControllerDeleteJourneyTypeOutput'.
       */
      return stat as IJourneyTypeControllerDeleteJourneyTypeOutputSuccess;
    } catch (error) {
      /*
       * Use the standard controller response object,
       * 'stat', to return the error message.
       */
      const { message } = error;
      stat.payload = { message };

      /*
       * Cast the response object to 'IJourneyTypeControllerDeleteJourneyTypeOutputError',
       */
      return stat as IJourneyTypeControllerDeleteJourneyTypeOutputError;
    }
  };
