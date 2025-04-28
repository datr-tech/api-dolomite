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
 * @returns { Promise<IHopControllerCreateHopOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IHopControllerCreateHopOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { hopModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
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
    /*
     * Populate the local 'modelParams' variable
     * with the received inputs.
     */
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

    /*
     * Use the populated 'modelParams' variable
     * to create a new instance of 'HopModel'.
     * 'db-dolomite'.
     */
    const hopModel = new HopModel(modelParams);

    /*
     * The save the created model to the associated store: 'db-dolomite',
     */
    await hopModel.save();

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { hopId: hopModel.id };

    /*
     * Cast the response object to
     * 'IHopControllerCreateHopOutputSuccess',
     * where the casting interface is a component of
     * the binary union type
     * 'IHopControllerCreateHopOutput'.
     */
    return stat as IHopControllerCreateHopOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IHopControllerCreateHopOutputError',
     */
    return stat as IHopControllerCreateHopOutputError;
  }
};
