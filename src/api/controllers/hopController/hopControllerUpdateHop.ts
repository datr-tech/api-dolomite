import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IHopControllerUpdateHop,
  IHopControllerUpdateHopOutputError,
  IHopControllerUpdateHopOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * hopControllerUpdateHop
 *
 * The dolomite API update hop controller.
 *
 * @param { IHopControllerUpdateHopInput } params
 * @param { Types.ObjectId } params.hopId
 * @param { Types.ObjectId } params.payload.journeyId  (Optional)
 * @param { Types.ObjectId } params.payload.resourceId  (Optional)
 * @param { string } params.payload.description  (Optional)
 * @param { string } params.payload.name  (Optional)
 * @param { number } params.payload.order  (Optional)
 * @param { Types.ObjectId } params.payload.adminStatusId  (Optional)
 * @param { Types.ObjectId } params.payload.adminUserId  (Optional)
 * @param { number } params.payload.createdAt  (Optional)
 * @param { number } params.payload.updatedAt  (Optional)
 *
 * @returns { Promise<IHopControllerUpdateHopOutput> }
 * @returns { Promise<IHopControllerUpdateHopOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IHopControllerUpdateHopOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { hopModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const hopControllerUpdateHop: IHopControllerUpdateHop = async ({
  hopId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'HopModel'
     * using the received 'hopId' param.
     * When successful, update the found model using
     * the key value pairs (or fields) from within the
     * 'payload' param.
     */
    await HopModel.findOneAndUpdate(
      {
        _id: hopId,
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
      hopId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to 'IHopControllerUpdateHopOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IHopControllerUpdateHopOutput'.
     */
    return stat as IHopControllerUpdateHopOutputSuccess;
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
     * Cast the response object to 'IHopControllerUpdateHopOutputError',
     */
    return stat as IHopControllerUpdateHopOutputError;
  }
};
