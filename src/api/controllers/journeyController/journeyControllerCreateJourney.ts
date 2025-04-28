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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
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

    const journeyModel = new JourneyModel(modelParams);
    await journeyModel.save();

    stat.error = false;
    stat.payload = { journeyId };
    return stat as IJourneyControllerCreateJourneyOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IJourneyControllerCreateJourneyOutputError;
  }
};
