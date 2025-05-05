import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyTypeControllerCreateJourneyType,
  IJourneyTypeControllerCreateJourneyTypeOutputError,
  IJourneyTypeControllerCreateJourneyTypeOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * journeyTypeControllerCreateJourneyType
 *
 * The dolomite API create journeyType controller.
 *
 * @param { IJourneyTypeControllerCreateJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt  (Optional)
 *
 * @returns { Promise<IJourneyTypeControllerCreateJourneyTypeOutput> }
 * @returns { Promise<IJourneyTypeControllerCreateJourneyTypeOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyTypeControllerCreateJourneyTypeOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyTypeModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyTypeControllerCreateJourneyType: IJourneyTypeControllerCreateJourneyType =
  async ({ description, name, adminStatusId, adminUserId, createdAt, updatedAt }) => {
    const stat = { ...baseStat };

    try {
      /*
       * Populate the local 'modelParams' variable
       * with the received inputs.
       */
      const journeyTypeId = new Types.ObjectId();
      const modelParams = {
        journeyTypeId,
        description,
        name,
        adminStatusId,
        adminUserId,
        createdAt,
        updatedAt,
      };

      /*
       * Use the populated 'modelParams' variable
       * to create a new instance of 'JourneyTypeModel'.
       * 'db-dolomite'. Then save the created
       * model to the associated store: 'db-dolomite',
       */
      const journeyTypeModel = new JourneyTypeModel(modelParams);
      await journeyTypeModel.save();

      /*
       * Use the standard controller response object,
       * 'stat', to return the found model's primary key.
       */
      stat.error = false;
      stat.payload = {
        journeyTypeId,
        responseStatusCode: 201,
      };

      /*
       * Cast the response object to
       * 'IJourneyTypeControllerCreateJourneyTypeOutputSuccess',
       * where the casting interface is a component of
       * the binary union type 'IJourneyTypeControllerCreateJourneyTypeOutput'.
       */
      return stat as IJourneyTypeControllerCreateJourneyTypeOutputSuccess;
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
       * Cast the response object to 'IJourneyTypeControllerCreateJourneyTypeOutputError',
       */
      return stat as IJourneyTypeControllerCreateJourneyTypeOutputError;
    }
  };
