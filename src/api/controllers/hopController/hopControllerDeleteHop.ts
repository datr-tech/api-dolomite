 import { Types } from "mongoose"; 
import { HopModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IHopControllerDeleteHop,
	IHopControllerDeleteHopOutputError,
	IHopControllerDeleteHopOutputSuccess
} from '@app-ad/interfaces/api/controllers';


/**
 * hopControllerDeleteHop
 *
 * The dolomite API delete hop controller.
 *
 * @param { IHopControllerDeleteHopInput } params
 * @param { Types.ObjectId } params.hopId
    *
 * @returns { Promise<IHopControllerDeleteHopOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { hopModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const hopControllerDeleteHop: IHopControllerDeleteHop = async ({ hopId }) => {
	  const stat = { ...baseStat };

  try { 

		
		await HopModel.findOneAndUpdate(
			{
				_id: hopId
			},
			{
				adminStatusId: new Types.ObjectId()
			},
			{
				includeResultMetadata: true
			}
		);

		stat.error = false;
		stat.payload = { hopId };
    return stat as IHopControllerDeleteHopOutputSuccess;
	
		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IHopControllerDeleteHopOutputError;
	}

};

