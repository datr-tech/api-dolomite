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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { hopModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */
export const hopControllerUpdateHop: IHopControllerUpdateHop = async ({
  hopId,
  payload,
}) => {
  const stat = { ...baseStat };

  try {
    await HopModel.findOneAndUpdate(
      {
        _id: hopId,
      },
      payload,
      {
        includeResultMetadata: true,
      },
    );

    stat.error = false;
    stat.payload = { hopId };
    return stat as IHopControllerUpdateHopOutputSuccess;
  } catch (error) {
    const { message } = error;
    stat.payload = { message };
    return stat as IHopControllerUpdateHopOutputError;
  }
};
