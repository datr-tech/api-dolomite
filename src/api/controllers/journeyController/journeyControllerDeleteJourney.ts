 import { Types } from "mongoose"; 
import { JourneyModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IJourneyControllerDeleteJourney,
	IJourneyControllerDeleteJourneyOutputError,
	IJourneyControllerDeleteJourneyOutputSuccess
} from '@app-ad/interfaces/api/controllers';


/**
 * journeyControllerDeleteJourney
 *
 * The dolomite API delete journey controller.
 *
 * @param { IJourneyControllerDeleteJourneyInput } params
 * @param { Types.ObjectId } params.journeyId
    *
 * @returns { Promise<IJourneyControllerDeleteJourneyOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const journeyControllerDeleteJourney: IJourneyControllerDeleteJourney = async ({ journeyId }) => {
	  const stat = { ...baseStat };

  try { 

		
		await JourneyModel.findOneAndUpdate(
			{
				_id: journeyId
			},
			{
				adminStatusId: new Types.ObjectId()
			},
			{
				includeResultMetadata: true
			}
		);

		stat.error = false;
		stat.payload = { journeyId };
    return stat as IJourneyControllerDeleteJourneyOutputSuccess;
	
		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IJourneyControllerDeleteJourneyOutputError;
	}

};

