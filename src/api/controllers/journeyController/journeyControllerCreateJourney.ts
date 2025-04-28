import { JourneyModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IJourneyControllerCreateJourney,
  IJourneyControllerCreateJourneyOutputError,
  IJourneyControllerCreateJourneyOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * journeyControllerCreateJourney
 *
 * The dolomite API create journey controller.
 *
 * @param { IJourneyControllerCreateJourneyInput } params
 * @param { Types.ObjectId } params.journeyId
 * @param { Types.ObjectId } params.frameworkId
 * @param { Types.ObjectId } params.journeyTypeId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IJourneyControllerCreateJourneyOutput> }
 * @returns { Promise<IJourneyControllerCreateJourneyOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IJourneyControllerCreateJourneyOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { journeyModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const journeyControllerCreateJourney: IJourneyControllerCreateJourney = async ({
  frameworkId,
  journeyTypeId,
  description,
  name,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
    const journeyId = new Types.ObjectId();
    const modelParams = {
      journeyId,
      frameworkId,
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
     * to create a new instance of 'JourneyModel'.
     * 'db-dolomite'. Then save the created
     * model to the associated store: 'db-dolomite',
     */
    const journeyModel = new JourneyModel(modelParams);
    await journeyModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model's primary key.
     */
    stat.error = false;
    stat.payload = { journeyId };

    /*
     * Cast the response object to
     * 'IJourneyControllerCreateJourneyOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IJourneyControllerCreateJourneyOutput'.
     */
    return stat as IJourneyControllerCreateJourneyOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IJourneyControllerCreateJourneyOutputError',
     */
    return stat as IJourneyControllerCreateJourneyOutputError;
  }
};
