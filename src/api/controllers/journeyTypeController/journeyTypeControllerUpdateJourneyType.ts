
import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IJourneyTypeControllerUpdateJourneyType,
	IJourneyTypeControllerUpdateJourneyTypeOutputError,
	IJourneyTypeControllerUpdateJourneyTypeOutputSuccess
} from '@app-ad/interfaces/api/controllers';


/**
 * journeyTypeControllerUpdateJourneyType
 *
 * The dolomite API update journeyType controller.
 *
 * @param { IJourneyTypeControllerUpdateJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
     * @param { string } params.payload.description  (Optional) 
    * @param { string } params.payload.name  (Optional) 
    * @param { Types.ObjectId } params.payload.adminStatusId  (Optional) 
    * @param { Types.ObjectId } params.payload.adminUserId  (Optional) 
    * @param { number } params.payload.createdAt  (Optional) 
    * @param { number } params.payload.updatedAt  (Optional) 
   *
 * @returns { Promise<IJourneyTypeControllerUpdateJourneyTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const journeyTypeControllerUpdateJourneyType: IJourneyTypeControllerUpdateJourneyType = async ({ journeyTypeId, payload }) => {

	  const stat = { ...baseStat };

  try { 

		await JourneyTypeModel.findOneAndUpdate(
			{
				_id: journeyTypeId
			},
			payload,
			{
				includeResultMetadata: true
			}
		);

		stat.error = false;
		stat.payload = { journeyTypeId };
    return stat as IJourneyTypeControllerUpdateJourneyTypeOutputSuccess;
	
		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IJourneyTypeControllerUpdateJourneyTypeOutputError;
	}

}

