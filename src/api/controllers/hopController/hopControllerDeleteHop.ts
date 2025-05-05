import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IHopControllerDeleteHop,
  IHopControllerDeleteHopOutputError,
  IHopControllerDeleteHopOutputSuccess,
} from '@app-ad/interfaces/api/controllers';
import { Types } from 'mongoose';

/**
 * hopControllerDeleteHop
 *
 * The dolomite API delete hop controller.
 *
 * @param { IHopControllerDeleteHopInput } params
 * @param { Types.ObjectId } params.hopId
 *
 * @returns { Promise<IHopControllerDeleteHopOutput> }
 * @returns { Promise<IHopControllerDeleteHopOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IHopControllerDeleteHopOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { hopModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const hopControllerDeleteHop: IHopControllerDeleteHop = async ({ hopId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'HopModel'
     * using the received 'hopId' param.
     * When successful, perform a "soft delete" upon the
     * found model by updating the value of the model's
     * 'adminStatusId' field.
     */
    await HopModel.findOneAndUpdate(
      {
        _id: hopId,
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
    stat.payload = {
      hopId,
      responseStatusCode: 200,
    };

    /*
     * Cast the response object to
     * 'IHopControllerDeleteHopOutputSuccess',
     * where the casting interface is a component of
     * the binary union type 'IHopControllerDeleteHopOutput'.
     */
    return stat as IHopControllerDeleteHopOutputSuccess;
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
     * Cast the response object to 'IHopControllerDeleteHopOutputError',
     */
    return stat as IHopControllerDeleteHopOutputError;
  }
};
