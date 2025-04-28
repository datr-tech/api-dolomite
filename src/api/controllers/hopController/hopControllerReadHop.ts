import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
  IHopControllerReadHop,
  IHopControllerReadHopOutputError,
  IHopControllerReadHopOutputSuccess,
} from '@app-ad/interfaces/api/controllers';

/**
 * hopControllerReadHop
 *
 * The dolomite API read hop controller.
 *
 * @param { IHopControllerReadHopInput } params
 * @param { Types.ObjectId } params.hopId
 *
 * @returns { Promise<IHopControllerReadHopOutput> }
 * @returns { Promise<IHopControllerReadHopOutputError> } ON ERROR: Promise<{ error: true, payload: { message }}>
 * @returns { Promise<IHopControllerReadHopOutputSuccess> } ON SUCCESS: Promise<{ error: false, payload: { hopModel }}>
 *
 * @author Datr.Tech Admin <admin@datr.tech>
 */
export const hopControllerReadHop: IHopControllerReadHop = async ({ hopId }) => {
  const stat = { ...baseStat };

  try {
    /*
     * Attempt to find an instance of 'HopModel'
     * using the received 'hopId' param.
     */
    const hopModel = await HopModel.findById(hopId);

    /*
     * Use the standard controller response object,
     * 'stat', to return the found model.
     */
    stat.error = false;
    stat.payload = { hopModel };

    /*
     * Cast the response object to 'IHopControllerReadHopOutputSuccess',
     * where the casting interface is a component of the binary union type
     * 'IHopControllerReadHopOutput'.
     */
    return stat as IHopControllerReadHopOutputSuccess;
  } catch (error) {
    /*
     * Use the standard controller response object,
     * 'stat', to return the error message.
     */
    const { message } = error;
    stat.payload = { message };

    /*
     * Cast the response object to 'IHopControllerReadHopOutputError',
     */
    return stat as IHopControllerReadHopOutputError;
  }
};
