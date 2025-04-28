 import { Types } from "mongoose"; 
import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IJourneyTypeControllerDeleteJourneyType,
	IJourneyTypeControllerDeleteJourneyTypeOutputError,
	IJourneyTypeControllerDeleteJourneyTypeOutputSuccess
} from '@app-ad/interfaces/api/controllers';


/**
 * journeyTypeControllerDeleteJourneyType
 *
 * The dolomite API delete journeyType controller.
 *
 * @param { IJourneyTypeControllerDeleteJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
    *
 * @returns { Promise<IJourneyTypeControllerDeleteJourneyTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const journeyTypeControllerDeleteJourneyType: IJourneyTypeControllerDeleteJourneyType = async ({ journeyTypeId }) => {
	  const stat = { ...baseStat };

  try { 

		
		await JourneyTypeModel.findOneAndUpdate(
			{
				_id: journeyTypeId
			},
			{
				adminStatusId: new Types.ObjectId()
			},
			{
				includeResultMetadata: true
			}
		);

		stat.error = false;
		stat.payload = { journeyTypeId };
    return stat as IJourneyTypeControllerDeleteJourneyTypeOutputSuccess;
	
		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IJourneyTypeControllerDeleteJourneyTypeOutputError;
	}

};

