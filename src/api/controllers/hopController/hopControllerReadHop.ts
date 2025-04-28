
import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IHopControllerReadHop,
	IHopControllerReadHopOutputError,
	IHopControllerReadHopOutputSuccess
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
 *
 * @example On succcess returns: Promise<{ error: false, payload: { hopModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const hopControllerReadHop: IHopControllerReadHop = async ({ hopId }) => {
	  const stat = { ...baseStat };

  try { 

		const hopModel = await HopModel.findById(hopId);

		stat.error = false;
		stat.payload = { hopModel };
		return stat as IHopControllerReadHopOutputSuccess;

		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IHopControllerReadHopOutputError;
	}

};

