import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IHopControllerCreateHop,
  IHopControllerCreateHopOutputError,
  IHopControllerCreateHopOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * hopControllerCreateHop
 *
 * The dolomite API create hop controller.
 *
 * @param { IHopControllerCreateHopInput } params
 * @param { Types.ObjectId } params.hopId
 * @param { Types.ObjectId } params.journeyId
 * @param { Types.ObjectId } params.resourceId
 * @param { string } params.description  (Optional)
 * @param { string } params.name
 * @param { number } params.order
 * @param { Types.ObjectId } params.adminStatusId
 * @param { Types.ObjectId } params.adminUserId
 * @param { number } params.createdAt  (Optional)
 * @param { number } params.updatedAt
 *
 * @returns { Promise<IHopControllerCreateHopOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { hopModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const hopControllerCreateHop: IHopControllerCreateHop = async ({
  journeyId,
  resourceId,
  description,
  name,
  order,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
}) => {
  const stat = { ...baseStat };

  try {
    const hopId = new Types.ObjectId();
    const modelParams = {
      hopId,
      journeyId,
      resourceId,
      description,
      name,
      order,
      adminStatusId,
      adminUserId,
      createdAt,
      updatedAt,
    };

    const hopModel = new HopModel(modelParams);
    await hopModel.save();

    stat.error = false;
    stat.payload = { hopId };
    return stat as IHopControllerCreateHopOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IHopControllerCreateHopOutputError;
  }
};
