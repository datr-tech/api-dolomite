 import { Types } from "mongoose"; 
import { JourneyTypeModel } from '@app-ad/api/models';
import { baseStat } from '@app-ad/api/util/baseStat';
import {
	IJourneyTypeControllerCreateJourneyType,
	IJourneyTypeControllerCreateJourneyTypeOutputError,
	IJourneyTypeControllerCreateJourneyTypeOutputSuccess
} from '@app-ad/interfaces/api/controllers';


/**
 * journeyTypeControllerCreateJourneyType
 *
 * The dolomite API create journeyType controller.
 *
 * @param { IJourneyTypeControllerCreateJourneyTypeInput } params
 * @param { Types.ObjectId } params.journeyTypeId
   * @param { string } params.description  (Optional) 
    * @param { string } params.name 
    * @param { Types.ObjectId } params.adminStatusId 
    * @param { Types.ObjectId } params.adminUserId 
    * @param { number } params.createdAt  (Optional) 
    * @param { number } params.updatedAt 
   *
 * @returns { Promise<IJourneyTypeControllerCreateJourneyTypeOutput> }
 *
 * @example On succcess returns: Promise<{ error: false, payload: { journeyTypeModel }}>
 * @example On failure returns: Promise<{ error: true, payload: { message }}> On failure
 */ 
export const journeyTypeControllerCreateJourneyType: IJourneyTypeControllerCreateJourneyType = async ({ 
  description,
  name,
  adminStatusId,
  adminUserId,
  createdAt,
  updatedAt,
  
}) => {

	  const stat = { ...baseStat };

  try { 


		const journeyTypeId = new Types.ObjectId();
		const modelParams = {
			journeyTypeId,
			description,
			name,
			adminStatusId,
			adminUserId,
			createdAt,
			updatedAt,
			
		};

		const journeyTypeModel = new JourneyTypeModel(modelParams);
		await journeyTypeModel.save();
	
		stat.error = false;
		stat.payload = { journeyTypeId };
		return stat as IJourneyTypeControllerCreateJourneyTypeOutputSuccess;

		} catch(error) {
		const { message } = error;
		stat.payload = { message };
		return stat as IJourneyTypeControllerCreateJourneyTypeOutputError;
	}

}
